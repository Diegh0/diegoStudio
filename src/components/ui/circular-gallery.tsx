import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface GalleryItem {
  common: string;
  binomial: string;
  description?: string;
  liveUrl?: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  onItemClick?: (item: GalleryItem) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, onItemClick, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const rotationAtDragStartRef = useRef(0);
    const dragDistanceRef = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        if (isDraggingRef.current) return;
        setIsScrolling(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        setRotation(scrollProgress * 360);

        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling && !isDraggingRef.current) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };
      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [isScrolling, autoRotateSpeed]);

    useEffect(() => {
      const onMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.clientX - dragStartXRef.current;
        dragDistanceRef.current = Math.abs(deltaX);
        setRotation(rotationAtDragStartRef.current + deltaX * 0.4);
      };

      const onMouseUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.touches[0].clientX - dragStartXRef.current;
        dragDistanceRef.current = Math.abs(deltaX);
        setRotation(rotationAtDragStartRef.current + deltaX * 0.4);
      };

      const onTouchEnd = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
      };
    }, []);

    const handleDragStart = (clientX: number) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartXRef.current = clientX;
      dragDistanceRef.current = 0;
      rotationAtDragStartRef.current = rotation;
    };

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px', cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={e => handleDragStart(e.clientX)}
        onTouchStart={e => handleDragStart(e.touches[0].clientX)}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute w-[300px] h-[400px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-150px',
                  marginTop: '-200px',
                  opacity,
                  transition: isDragging ? 'none' : 'opacity 0.3s linear',
                  userSelect: 'none',
                }}
                onClick={() => {
                  if (dragDistanceRef.current < 8) onItemClick?.(item);
                }}
              >
                <div
                  className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden border border-gray-700/50 bg-gray-900/70 backdrop-blur-lg"
                  style={{
                    cursor: isDragging
                      ? 'grabbing'
                      : onItemClick && item.liveUrl
                        ? 'pointer'
                        : 'grab',
                  }}
                >
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center', pointerEvents: 'none' }}
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="text-xl font-bold">{item.common}</h2>
                    <em className="text-sm italic opacity-80">{item.binomial}</em>
                    <p className="text-xs mt-2 opacity-70">by {item.photo.by}</p>
                    {onItemClick && (
                      <p className="text-xs mt-2 text-gold opacity-60 tracking-widest uppercase">
                        Click para ver →
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
