import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { User, Briefcase, Mail, Home as HomeIcon, Menu, X } from "lucide-react";

interface DockProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onReturnToLanding?: () => void;
}

const MIN_SWIPE_LEFT_DISTANCE = 28;
const HORIZONTAL_DOMINANCE_RATIO = 1.5;

export function Dock({
  activeSection,
  setActiveSection,
  onReturnToLanding,
}: DockProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Track horizontal swipe gesture specifically started on "Kanika's Portfolio"
  const brandSwipeRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
    lockedVertical: boolean;
    triggered: boolean;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    lockedVertical: false,
    triggered: false,
  });

  const resetBrandSwipe = () => {
    brandSwipeRef.current.active = false;
    brandSwipeRef.current.pointerId = null;
    brandSwipeRef.current.lockedVertical = false;
    brandSwipeRef.current.triggered = false;
  };

  const triggerSwipeLeftNavigation = () => {
    if (brandSwipeRef.current.triggered) return;
    brandSwipeRef.current.triggered = true;
    setIsMobileMenuOpen(false);
    if (onReturnToLanding) {
      onReturnToLanding();
    } else if (activeSection !== "home") {
      setActiveSection("home");
    }
  };

  const evaluateBrandSwipe = (currentX: number, currentY: number): boolean => {
    const state = brandSwipeRef.current;
    if (!state.active || state.lockedVertical || state.triggered) return false;

    const dx = currentX - state.startX;
    const dy = currentY - state.startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // If vertical motion dominates, allow normal vertical scrolling and ignore swipe
    if (absDy > 12 && absDy > absDx) {
      state.lockedVertical = true;
      return false;
    }

    // Leftward horizontal swipe exceeding minimum distance threshold
    if (
      dx <= -MIN_SWIPE_LEFT_DISTANCE &&
      absDx >= absDy * HORIZONTAL_DOMINANCE_RATIO
    ) {
      triggerSwipeLeftNavigation();
      return true;
    }

    return false;
  };

  const handleBrandTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    brandSwipeRef.current = {
      active: true,
      pointerId: null,
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
      lockedVertical: false,
      triggered: false,
    };
  };

  const handleBrandTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    const state = brandSwipeRef.current;
    if (!state.active || state.lockedVertical || e.touches.length !== 1) return;
    const touch = e.touches[0];
    state.lastX = touch.clientX;
    state.lastY = touch.clientY;
    evaluateBrandSwipe(touch.clientX, touch.clientY);
  };

  const handleBrandTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const state = brandSwipeRef.current;
    if (!state.active) return;
    const touch = e.changedTouches[0];
    const endX = touch ? touch.clientX : state.lastX;
    const endY = touch ? touch.clientY : state.lastY;
    evaluateBrandSwipe(endX, endY);
    resetBrandSwipe();
  };

  const handleBrandPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return; // Handled by touch events on touch devices
    if (e.button !== 0) return;
    brandSwipeRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      lastX: e.clientX,
      lastY: e.clientY,
      lockedVertical: false,
      triggered: false,
    };
  };

  const handleBrandPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const state = brandSwipeRef.current;
    if (!state.active || state.pointerId !== e.pointerId || state.lockedVertical) {
      return;
    }
    state.lastX = e.clientX;
    state.lastY = e.clientY;

    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;
    if (
      Math.abs(dx) > 8 &&
      Math.abs(dx) > Math.abs(dy) * HORIZONTAL_DOMINANCE_RATIO &&
      !e.currentTarget.hasPointerCapture(e.pointerId)
    ) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Ignore pointer capture errors
      }
    }

    evaluateBrandSwipe(e.clientX, e.clientY);
  };

  const handleBrandPointerUp = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const state = brandSwipeRef.current;
    if (!state.active || state.pointerId !== e.pointerId) return;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore pointer release errors
      }
    }
    evaluateBrandSwipe(e.clientX, e.clientY);
    resetBrandSwipe();
  };

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target || typeof target.scrollTop !== "number") return;
      const scrollTop = target.scrollTop;

      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const atTop = scrollTop <= 10;
        setIsAtTop((prev) => (prev === atTop ? prev : atTop));

        if (atTop) {
          setIsScrolling((prev) => (prev ? false : prev));
          if (scrollTimeout) clearTimeout(scrollTimeout);
          return;
        }

        setIsScrolling((prev) => (prev ? prev : true));
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 400);
      });
    };

    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll, {
        capture: true,
      });
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Close mobile menu on outside click, Escape key, or resize to desktop
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const isRectangular = isScrolling && !isAtTop;

  const links = [
    { id: "home", name: "Home", icon: HomeIcon, isItalic: false },
    {
      id: "about",
      name: "About Me",
      icon: User,
      isItalic: false,
    },
    { id: "work", name: "My Work", icon: Briefcase, isItalic: false },
    { id: "contact", name: "Contact Me", icon: Mail, isItalic: false },
  ];

  const handleMobileNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -24, scale: 0.96, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-50 top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 lg:top-6 lg:left-8 lg:right-8 flex justify-center pointer-events-none"
    >
      <div className="relative w-full max-w-7xl flex flex-col items-center pointer-events-none">
        <motion.div
          animate={{
            borderRadius: isRectangular ? "16px" : "9999px",
            backgroundColor: isRectangular
              ? "rgba(255, 255, 255, 0.9)"
              : "rgba(255, 255, 255, 0.5)",
            boxShadow: isRectangular
              ? "0 12px 40px -10px rgba(0, 0, 0, 0.12)"
              : "0 4px 20px -5px rgba(0, 0, 0, 0.05)",
            scaleX: isRectangular ? 1.01 : 1,
            scaleY: isRectangular ? 1.02 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-nav px-3 md:px-4 py-1 md:py-1.5 flex items-center justify-between w-full h-[48px] md:h-[54px] pointer-events-auto origin-center border border-black/5"
          style={{
            backdropFilter: isRectangular ? "blur(32px)" : "blur(16px)",
            willChange: "transform, border-radius, background-color, box-shadow",
          }}
        >
          {/* Mobile & Tablet Layout (< lg): Left Hamburger + Viewport-Centred Title */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full h-full lg:hidden">
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
                className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full text-zinc-800 hover:text-zinc-950 hover:bg-black/5 active:scale-95 transition-all outline-none"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="flex items-center justify-center"
                    >
                      <X size={19} className="stroke-[1.75]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 45, scale: 0.85 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -45, scale: 0.85 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="flex items-center justify-center"
                    >
                      <Menu size={19} className="stroke-[1.75]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div className="flex items-center justify-center px-2 min-w-0">
              <h1
                onTouchStart={handleBrandTouchStart}
                onTouchMove={handleBrandTouchMove}
                onTouchEnd={handleBrandTouchEnd}
                onTouchCancel={resetBrandSwipe}
                onPointerDown={handleBrandPointerDown}
                onPointerMove={handleBrandPointerMove}
                onPointerUp={handleBrandPointerUp}
                onPointerCancel={resetBrandSwipe}
                style={{ touchAction: "pan-y" }}
                className="text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight text-zinc-900 cursor-default select-none whitespace-nowrap truncate"
              >
                Kanika's{" "}
                <span className="text-zinc-500 font-light italic">
                  Portfolio
                </span>
              </h1>
            </div>

            <div className="flex items-center justify-end" aria-hidden="true" />
          </div>

          {/* Desktop Layout (lg+): Unchanged */}
          <div className="hidden lg:flex items-center justify-between w-full h-full">
            {/* Branding Area */}
            <div className="flex-shrink-0 flex items-center h-full mr-6 ml-4">
              <h1
                onTouchStart={handleBrandTouchStart}
                onTouchMove={handleBrandTouchMove}
                onTouchEnd={handleBrandTouchEnd}
                onTouchCancel={resetBrandSwipe}
                onPointerDown={handleBrandPointerDown}
                onPointerMove={handleBrandPointerMove}
                onPointerUp={handleBrandPointerUp}
                onPointerCancel={resetBrandSwipe}
                style={{ touchAction: "pan-y" }}
                className="text-[15px] font-medium tracking-tight text-zinc-900 cursor-default select-none whitespace-nowrap"
              >
                Kanika's{" "}
                <span className="text-zinc-500 font-light italic">
                  Portfolio
                </span>
              </h1>
            </div>

            {/* Navigation Area */}
            <nav className="flex items-center gap-1 h-full">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => setActiveSection(link.id)}
                    className="group relative flex items-center justify-center rounded-full px-3 py-1.5 outline-none h-full transition-transform active:scale-95 whitespace-nowrap"
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <span
                        className={`text-[12px] font-medium transition-colors duration-300 tracking-wide whitespace-nowrap z-10 ${
                          link.isItalic ? "italic" : ""
                        } ${
                          isActive
                            ? "text-zinc-900"
                            : "text-zinc-500 group-hover:text-zinc-700"
                        }`}
                      >
                        {link.name}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/5"
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </motion.div>

        {/* Mobile & Tablet Dropdown Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden w-full mt-2.5 bg-white/85 backdrop-blur-2xl border border-black/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] rounded-3xl p-2 pointer-events-auto overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleMobileNavClick(link.id)}
                      className={`group relative flex items-center justify-between w-full px-4 py-3 rounded-2xl text-left transition-all duration-200 outline-none active:scale-[0.99] ${
                        isActive
                          ? "bg-zinc-900/5 text-zinc-900 font-medium"
                          : "text-zinc-600 hover:text-zinc-900 hover:bg-black/[0.03]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <link.icon
                          size={17}
                          className={`flex-shrink-0 stroke-[1.6] transition-colors ${
                            isActive
                              ? "text-zinc-900"
                              : "text-zinc-400 group-hover:text-zinc-700"
                          }`}
                        />
                        <span
                          className={`text-[14px] md:text-[15px] tracking-tight truncate ${
                            link.isItalic ? "italic" : ""
                          }`}
                        >
                          {link.name}
                        </span>
                      </div>
                      {isActive && (
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-900 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

