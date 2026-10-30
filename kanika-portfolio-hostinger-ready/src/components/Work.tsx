import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Share2,
  Check,
  Copy,
  Link2,
  AlertCircle,
} from "lucide-react";

export interface ProjectDesign {
  src: string;
  cardWebp: string;
  thumbWebp: string;
  width: number;
  height: number;
  label: string;
  slug: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  coverImage: string;
  coverWebp: string;
  coverWidth: number;
  coverHeight: number;
  designs: ProjectDesign[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "raymond",
    title: "The Art Of Being Refined",
    brand: "RAYMOND",
    category: "Luxury Packaging & Identity",
    description:
      "This project explores the rebranding of Raymond from “The Complete Man” to “The Complete You,” bringing menswear and womenswear together under one identity. The refreshed brand expression extends across shopping bags, billboard advertising, and social media, blending Raymond’s timeless elegance with a more inclusive and contemporary approach.",
    coverImage: "/Raymond Design 1.jpeg",
    coverWebp: "/optimized/card/raymond-design-1.webp",
    coverWidth: 1254,
    coverHeight: 1254,
    designs: [
      {
        src: "/Raymond Design 1.jpeg",
        cardWebp: "/optimized/card/raymond-design-1.webp",
        thumbWebp: "/optimized/thumb/raymond-design-1.webp",
        width: 1254,
        height: 1254,
        label: "Raymond Design 1",
        slug: "raymond-design-1",
      },
      {
        src: "/Raymond Design 2.jpeg",
        cardWebp: "/optimized/card/raymond-design-2.webp",
        thumbWebp: "/optimized/thumb/raymond-design-2.webp",
        width: 1254,
        height: 1254,
        label: "Raymond Design 2",
        slug: "raymond-design-2",
      },
      {
        src: "/Raymond Design 3.jpeg",
        cardWebp: "/optimized/card/raymond-design-3.webp",
        thumbWebp: "/optimized/thumb/raymond-design-3.webp",
        width: 1058,
        height: 1486,
        label: "Raymond Design 3",
        slug: "raymond-design-3",
      },
    ],
  },
  {
    id: 2,
    slug: "paper-boat",
    title: "A Sip of Nostalgia",
    brand: "PAPER BOAT",
    category: "Packaging & Brand Campaign",
    description:
      "This project explores the use of bold colours, playful typography, and vibrant fruit illustrations to give Paper Boat Swing a more youthful, fun, and refreshing identity while staying true to the brand’s original essence.",
    coverImage: "/Paper Boat Design 1.jpeg",
    coverWebp: "/optimized/card/paper-boat-design-1.webp",
    coverWidth: 1254,
    coverHeight: 1254,
    designs: [
      {
        src: "/Paper Boat Design 1.jpeg",
        cardWebp: "/optimized/card/paper-boat-design-1.webp",
        thumbWebp: "/optimized/thumb/paper-boat-design-1.webp",
        width: 1254,
        height: 1254,
        label: "Paper Boat Design 1",
        slug: "paper-boat-design-1",
      },
      {
        src: "/Paper Boat Design 2.jpeg",
        cardWebp: "/optimized/card/paper-boat-design-2.webp",
        thumbWebp: "/optimized/thumb/paper-boat-design-2.webp",
        width: 1254,
        height: 1254,
        label: "Paper Boat Design 2",
        slug: "paper-boat-design-2",
      },
      {
        src: "/Paper Boat Design 3.jpeg",
        cardWebp: "/optimized/card/paper-boat-design-3.webp",
        thumbWebp: "/optimized/thumb/paper-boat-design-3.webp",
        width: 1254,
        height: 1254,
        label: "Paper Boat Design 3",
        slug: "paper-boat-design-3",
      },
    ],
  },
  {
    id: 3,
    slug: "alhind-air",
    title: "Beyond The Horizon",
    brand: "ALHIND AIR",
    category: "Brand Identity & Visual System",
    description:
      "This project explores the branding of Alhind Air, an Indian airline connecting India and the Middle East. The identity combines modern typography, a thoughtful colour palette, and clean visual elements across the logo, aircraft branding, boarding pass, and cabin seats, creating a cohesive and welcoming brand experience.",
    coverImage: "/Ahind Air Design 1.jpeg",
    coverWebp: "/optimized/card/alhind-air-design-1.webp",
    coverWidth: 1448,
    coverHeight: 1086,
    designs: [
      {
        src: "/Ahind Air Design 1.jpeg",
        cardWebp: "/optimized/card/alhind-air-design-1.webp",
        thumbWebp: "/optimized/thumb/alhind-air-design-1.webp",
        width: 1448,
        height: 1086,
        label: "Alhind Air Design 1",
        slug: "alhind-air-design-1",
      },
      {
        src: "/Ahind Air Design 2.jpeg",
        cardWebp: "/optimized/card/alhind-air-design-2.webp",
        thumbWebp: "/optimized/thumb/alhind-air-design-2.webp",
        width: 1600,
        height: 640,
        label: "Alhind Air Design 2",
        slug: "alhind-air-design-2",
      },
      {
        src: "/Ahind Air Design 3.jpeg",
        cardWebp: "/optimized/card/alhind-air-design-3.webp",
        thumbWebp: "/optimized/thumb/alhind-air-design-3.webp",
        width: 616,
        height: 472,
        label: "Alhind Air Design 3",
        slug: "alhind-air-design-3",
      },
      {
        src: "/Ahind Air Design 4.jpeg",
        cardWebp: "/optimized/card/alhind-air-design-4.webp",
        thumbWebp: "/optimized/thumb/alhind-air-design-4.webp",
        width: 1600,
        height: 900,
        label: "Alhind Air Design 4",
        slug: "alhind-air-design-4",
      },
    ],
  },
  {
    id: 4,
    slug: "alcohol-zambara",
    title: "A Taste Of The Untamed",
    brand: "ALCOHOL ZAMBARA",
    category: "Visual Communication & Branding",
    description:
      "This project explores the packaging design of a premium African cream liqueur inspired by African culture and aesthetics. Using bold geometric patterns, earthy tones, and tribal-inspired visuals, I created a cohesive packaging system with a strong premium identity and shelf appeal.",
    coverImage: "/Zambara Design 1.jpeg",
    coverWebp: "/optimized/card/zambara-design-1.webp",
    coverWidth: 1024,
    coverHeight: 1536,
    designs: [
      {
        src: "/Zambara Design 1.jpeg",
        cardWebp: "/optimized/card/zambara-design-1.webp",
        thumbWebp: "/optimized/thumb/zambara-design-1.webp",
        width: 1024,
        height: 1536,
        label: "Alcohol Zambara Design 1",
        slug: "zambara-design-1",
      },
      {
        src: "/Zambara Design 2.jpeg",
        cardWebp: "/optimized/card/zambara-design-2.webp",
        thumbWebp: "/optimized/thumb/zambara-design-2.webp",
        width: 1024,
        height: 1536,
        label: "Alcohol Zambara Design 2",
        slug: "zambara-design-2",
      },
      {
        src: "/Zambara Design 3.jpeg",
        cardWebp: "/optimized/card/zambara-design-3.webp",
        thumbWebp: "/optimized/thumb/zambara-design-3.webp",
        width: 1487,
        height: 1058,
        label: "Alcohol Zambara Design 3",
        slug: "zambara-design-3",
      },
    ],
  },
  {
    id: 5,
    slug: "reva",
    title: "Recovery, Reimagined",
    brand: "REVA",
    category: "Packaging & Brand Experience",
    description:
      "This project explores recovery through REVA, a recovery patch brand inspired by strength and renewal. Sage green tones, elegant typography, and minimal packaging create a calm, balanced identity that reflects the idea of resetting and coming back stronger.",
    coverImage: "/Reva Design 1.jpeg",
    coverWebp: "/optimized/card/reva-design-1.webp",
    coverWidth: 855,
    coverHeight: 1024,
    designs: [
      {
        src: "/Reva Design 1.jpeg",
        cardWebp: "/optimized/card/reva-design-1.webp",
        thumbWebp: "/optimized/thumb/reva-design-1.webp",
        width: 855,
        height: 1024,
        label: "Reva Design 1",
        slug: "reva-design-1",
      },
      {
        src: "/Reva Design 2.jpeg",
        cardWebp: "/optimized/card/reva-design-2.webp",
        thumbWebp: "/optimized/thumb/reva-design-2.webp",
        width: 677,
        height: 477,
        label: "Reva Design 2",
        slug: "reva-design-2",
      },
      {
        src: "/Reva Design 3.jpeg",
        cardWebp: "/optimized/card/reva-design-3.webp",
        thumbWebp: "/optimized/thumb/reva-design-3.webp",
        width: 1411,
        height: 1115,
        label: "Reva Design 3",
        slug: "reva-design-3",
      },
      {
        src: "/Reva Design 4.jpeg",
        cardWebp: "/optimized/card/reva-design-4.webp",
        thumbWebp: "/optimized/thumb/reva-design-4.webp",
        width: 1492,
        height: 1054,
        label: "Reva Design 4",
        slug: "reva-design-4",
      },
    ],
  },
];

// In-memory cache of preloaded & decoded image URLs so switching mockups is instantaneous
const decodedImageUrls = new Set<string>();
const retainedImages = new Map<string, HTMLImageElement>();
const inflightPreloads = new Map<string, Promise<void>>();

export function isImageDecoded(rawSrc: string): boolean {
  const encoded = encodeURI(rawSrc);
  return decodedImageUrls.has(encoded) || decodedImageUrls.has(rawSrc);
}

export function preloadAndDecodeImage(rawSrc: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const url = encodeURI(rawSrc);
  if (decodedImageUrls.has(url)) {
    return Promise.resolve();
  }
  const existing = inflightPreloads.get(url);
  if (existing) {
    return existing;
  }

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.decoding = "async";
    const markDone = () => {
      decodedImageUrls.add(url);
      decodedImageUrls.add(rawSrc);
      retainedImages.set(url, img);
      inflightPreloads.delete(url);
      resolve();
    };
    img.onload = () => {
      if (typeof img.decode === "function") {
        img.decode().then(markDone).catch(markDone);
      } else {
        markDone();
      }
    };
    img.onerror = () => {
      inflightPreloads.delete(url);
      resolve();
    };
    img.src = url;
  });

  inflightPreloads.set(url, promise);
  return promise;
}

export function preloadProjectAssets(project: Project, activeIndex = 0): void {
  if (typeof window === "undefined") return;
  const designs = project.designs;
  if (!designs.length) return;

  const primary = designs[activeIndex] ?? designs[0];
  // 1. Highest priority: active full design and its thumbnail
  preloadAndDecodeImage(primary.src);
  preloadAndDecodeImage(primary.thumbWebp);

  // 2. Next and previous adjacent designs for instant Next/Previous navigation
  const nextIdx = (activeIndex + 1) % designs.length;
  const prevIdx = (activeIndex - 1 + designs.length) % designs.length;

  if (nextIdx !== activeIndex) {
    preloadAndDecodeImage(designs[nextIdx].src);
    preloadAndDecodeImage(designs[nextIdx].thumbWebp);
  }
  if (prevIdx !== activeIndex && prevIdx !== nextIdx) {
    preloadAndDecodeImage(designs[prevIdx].src);
    preloadAndDecodeImage(designs[prevIdx].thumbWebp);
  }

  // 3. Remaining thumbnails & designs in project
  designs.forEach((d, idx) => {
    preloadAndDecodeImage(d.thumbWebp);
    if (idx !== activeIndex && idx !== nextIdx && idx !== prevIdx) {
      preloadAndDecodeImage(d.src);
    }
  });
}

let hasWarmedUp = false;
export function warmUpPortfolioAssets(): void {
  if (typeof window === "undefined" || hasWarmedUp) return;
  hasWarmedUp = true;

  // Warm up About profile picture and all 5 project card covers + first mockups
  preloadAndDecodeImage("/About Profile Pic.jpeg");
  projects.forEach((project) => {
    preloadAndDecodeImage(project.coverWebp);
    if (project.designs[0]) {
      preloadAndDecodeImage(project.designs[0].src);
      preloadAndDecodeImage(project.designs[0].thumbWebp);
    }
  });
}

function normalizeIdentifier(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\.(jpeg|jpg|png|webp|svg)$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function resolveDeepLinkFromSearch(search: string): {
  project: Project;
  designIndex: number;
} | null {
  if (!search) return null;
  const params = new URLSearchParams(search);
  const rawProject = params.get("project");
  const rawDesign = params.get("design");

  if (!rawProject && !rawDesign) return null;

  let matchedProject: Project | undefined;

  if (rawProject) {
    const normalizedProject = normalizeIdentifier(rawProject);
    matchedProject = projects.find(
      (p) =>
        p.slug === normalizedProject ||
        normalizeIdentifier(p.brand) === normalizedProject ||
        normalizeIdentifier(p.title) === normalizedProject ||
        String(p.id) === normalizedProject ||
        `graphic-design-${p.id}` === normalizedProject ||
        (p.slug === "alhind-air" && normalizedProject === "ahind-air") ||
        (p.slug === "alcohol-zambara" && normalizedProject === "zambara")
    );
    if (!matchedProject) {
      return null;
    }
  }

  if (rawDesign) {
    const normalizedDesign = normalizeIdentifier(rawDesign);

    if (matchedProject) {
      const asNumber = Number(rawDesign);
      if (
        Number.isInteger(asNumber) &&
        asNumber >= 1 &&
        asNumber <= matchedProject.designs.length
      ) {
        return { project: matchedProject, designIndex: asNumber - 1 };
      }

      const foundIndex = matchedProject.designs.findIndex(
        (d, idx) =>
          d.slug === normalizedDesign ||
          normalizeIdentifier(d.label) === normalizedDesign ||
          normalizeIdentifier(d.src) === normalizedDesign ||
          `design-${idx + 1}` === normalizedDesign
      );

      if (foundIndex === -1) {
        return null;
      }

      return { project: matchedProject, designIndex: foundIndex };
    } else {
      for (const proj of projects) {
        const idx = proj.designs.findIndex(
          (d) =>
            d.slug === normalizedDesign ||
            normalizeIdentifier(d.label) === normalizedDesign ||
            normalizeIdentifier(d.src) === normalizedDesign
        );
        if (idx !== -1) {
          return { project: proj, designIndex: idx };
        }
      }
      return null;
    }
  }

  if (matchedProject) {
    return { project: matchedProject, designIndex: 0 };
  }

  return null;
}

export function buildShareUrl(project: Project, designIndex: number): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set("project", project.slug);
  url.searchParams.set("design", String(designIndex + 1));
  return url.toString();
}

export function clearDeepLinkParamsFromUrl(): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (url.searchParams.has("project") || url.searchParams.has("design")) {
    url.searchParams.delete("project");
    url.searchParams.delete("design");
    const nextUrl =
      url.pathname +
      (url.searchParams.toString() ? `?${url.searchParams.toString()}` : "") +
      url.hash;
    window.history.replaceState(null, "", nextUrl);
  }
}

export function syncDeepLinkParamsToUrl(
  project: Project,
  designIndex: number
): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.set("project", project.slug);
  url.searchParams.set("design", String(designIndex + 1));
  const nextUrl = `${url.pathname}?${url.searchParams.toString()}${url.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

interface TransformState {
  scale: number;
  x: number;
  y: number;
}

const DEFAULT_TRANSFORM: TransformState = {
  scale: MIN_ZOOM,
  x: 0,
  y: 0,
};

function getDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.hypot(dx, dy);
}

function FullscreenViewer({
  project,
  initialDesignIndex = 0,
  onClose,
}: {
  project: Project;
  initialDesignIndex?: number;
  onClose: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState(() =>
    initialDesignIndex >= 0 && initialDesignIndex < project.designs.length
      ? initialDesignIndex
      : 0
  );

  // Single source of truth for zoom scale and pan offsets
  const [transform, setTransform] = useState<TransformState>(DEFAULT_TRANSFORM);
  const transformRef = useRef<TransformState>(DEFAULT_TRANSFORM);

  const [isInteracting, setIsInteracting] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const transformLayerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const shareInputRef = useRef<HTMLInputElement>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  // Pointer & touch gesture tracking refs
  const activePointersRef = useRef<Map<number, { x: number; y: number }>>(
    new Map()
  );
  const dragSessionRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
    hasMoved: boolean;
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
    hasMoved: false,
  });
  const pinchSessionRef = useRef<{
    initialDistance: number;
    initialScale: number;
    originX: number;
    originY: number;
  } | null>(null);

  const currentDesign = project.designs[selectedIndex] ?? project.designs[0];
  const shareUrl = buildShareUrl(project, selectedIndex);

  const applyTransform = useCallback((next: TransformState) => {
    const normalized: TransformState =
      next.scale <= MIN_ZOOM
        ? DEFAULT_TRANSFORM
        : {
            scale: Math.min(Math.max(next.scale, MIN_ZOOM), MAX_ZOOM),
            x: Math.round(next.x),
            y: Math.round(next.y),
          };
    transformRef.current = normalized;
    setTransform(normalized);
  }, []);

  const clampPanPosition = useCallback(
    (pos: { x: number; y: number }, targetScale: number) => {
      if (targetScale <= MIN_ZOOM) {
        return { x: 0, y: 0 };
      }
      const container = containerRef.current;
      const img = imageRef.current;
      if (!container) {
        return pos;
      }
      const containerRect = container.getBoundingClientRect();
      const baseWidth =
        img && img.offsetWidth > 0 ? img.offsetWidth : containerRect.width * 0.8;
      const baseHeight =
        img && img.offsetHeight > 0
          ? img.offsetHeight
          : containerRect.height * 0.8;

      const maxX = Math.max(
        (baseWidth * (targetScale - 1)) / 2,
        (baseWidth * targetScale - containerRect.width * 0.45) / 2,
        0
      );
      const maxY = Math.max(
        (baseHeight * (targetScale - 1)) / 2,
        (baseHeight * targetScale - containerRect.height * 0.45) / 2,
        0
      );

      return {
        x: Math.min(Math.max(pos.x, -maxX), maxX),
        y: Math.min(Math.max(pos.y, -maxY), maxY),
      };
    },
    []
  );

  // One-click full reset to fitted 1x view and centered position (0, 0)
  const resetZoomAndPan = useCallback(() => {
    activePointersRef.current.clear();
    pinchSessionRef.current = null;
    dragSessionRef.current.pointerId = null;
    dragSessionRef.current.hasMoved = false;
    setIsInteracting(false);
    applyTransform(DEFAULT_TRANSFORM);
  }, [applyTransform]);

  const handleSelectDesign = useCallback(
    (index: number) => {
      setHasImageError(false);
      setSelectedIndex(index);
      resetZoomAndPan();
      setCopied(false);
    },
    [resetZoomAndPan]
  );

  const handlePrevDesign = useCallback(() => {
    setHasImageError(false);
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : project.designs.length - 1
    );
    resetZoomAndPan();
    setCopied(false);
  }, [project.designs.length, resetZoomAndPan]);

  const handleNextDesign = useCallback(() => {
    setHasImageError(false);
    setSelectedIndex((prev) =>
      prev < project.designs.length - 1 ? prev + 1 : 0
    );
    resetZoomAndPan();
    setCopied(false);
  }, [project.designs.length, resetZoomAndPan]);

  // Progressive preloading & decoding of active and adjacent mockups
  useEffect(() => {
    preloadProjectAssets(project, selectedIndex);
  }, [project, selectedIndex]);

  useEffect(() => {
    const validIndex =
      initialDesignIndex >= 0 && initialDesignIndex < project.designs.length
        ? initialDesignIndex
        : 0;
    setHasImageError(false);
    setSelectedIndex(validIndex);
    resetZoomAndPan();
    setIsGalleryOpen(false);
    setIsShareOpen(false);
    setCopied(false);
  }, [project.id, initialDesignIndex, project.designs.length, resetZoomAndPan]);

  useEffect(() => {
    syncDeepLinkParamsToUrl(project, selectedIndex);
  }, [project, selectedIndex]);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const activeThumb = thumbnailRefs.current[selectedIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex, isGalleryOpen]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  // Reliable incremental Zoom In around current focal point
  const handleZoomIn = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation();
      }
      setIsInteracting(false);
      const current = transformRef.current;
      if (current.scale >= MAX_ZOOM) {
        return;
      }
      const nextScale = Math.min(
        Number((current.scale + ZOOM_STEP).toFixed(2)),
        MAX_ZOOM
      );
      const ratio = nextScale / current.scale;
      const clamped = clampPanPosition(
        {
          x: Math.round(current.x * ratio),
          y: Math.round(current.y * ratio),
        },
        nextScale
      );
      applyTransform({
        scale: nextScale,
        x: clamped.x,
        y: clamped.y,
      });
    },
    [applyTransform, clampPanPosition]
  );

  // Critical Requirement: One single click on Zoom Out immediately restores 1x full fitted view
  const handleZoomOut = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.stopPropagation();
      }
      resetZoomAndPan();
    },
    [resetZoomAndPan]
  );

  // Keep pan position cleanly clamped on viewport resize or orientation change
  useEffect(() => {
    let rafId: number | null = null;
    const handleResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const current = transformRef.current;
        if (current.scale <= MIN_ZOOM) {
          if (current.x !== 0 || current.y !== 0) {
            applyTransform(DEFAULT_TRANSFORM);
          }
          return;
        }
        const clamped = clampPanPosition(
          { x: current.x, y: current.y },
          current.scale
        );
        applyTransform({
          scale: current.scale,
          x: clamped.x,
          y: clamped.y,
        });
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [applyTransform, clampPanPosition]);

  const copyLinkToClipboard = useCallback(async () => {
    const urlToCopy = buildShareUrl(project, selectedIndex);
    let success = false;

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(urlToCopy);
        success = true;
      } catch {
        success = false;
      }
    }

    if (!success && shareInputRef.current) {
      try {
        shareInputRef.current.focus();
        shareInputRef.current.select();
        success = document.execCommand("copy");
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2400);
    } else if (shareInputRef.current) {
      shareInputRef.current.focus();
      shareInputRef.current.select();
    }
  }, [project, selectedIndex]);

  const handleShareClick = useCallback(async () => {
    setIsGalleryOpen(false);
    const urlToShare = buildShareUrl(project, selectedIndex);

    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title: `${currentDesign.label} — ${project.brand} | Kanika’s Portfolio`,
          text: `${project.title} (${project.brand}) — ${currentDesign.label}`,
          url: urlToShare,
        });
        return;
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
      }
    }

    setIsShareOpen((prev) => !prev);
  }, [project, selectedIndex, currentDesign.label]);

  const handleToggleGallery = useCallback(() => {
    setIsShareOpen(false);
    setIsGalleryOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isShareOpen) {
          setIsShareOpen(false);
          return;
        }
        if (isGalleryOpen) {
          setIsGalleryOpen(false);
          return;
        }
        onClose();
        return;
      }
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      }
      if (e.key === "-" || e.key === "0") {
        e.preventDefault();
        handleZoomOut();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevDesign();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextDesign();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isShareOpen,
    isGalleryOpen,
    onClose,
    handleZoomIn,
    handleZoomOut,
    handlePrevDesign,
    handleNextDesign,
  ]);

  // Smooth wheel / trackpad zoom centered around cursor focal point
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const current = transformRef.current;
      const delta = -e.deltaY * 0.0035;
      const nextScale = Math.min(
        Math.max(MIN_ZOOM, Number((current.scale + delta).toFixed(2))),
        MAX_ZOOM
      );

      if (nextScale <= MIN_ZOOM) {
        applyTransform(DEFAULT_TRANSFORM);
        return;
      }

      const rect = container.getBoundingClientRect();
      const cursorOffsetX = e.clientX - (rect.left + rect.width / 2);
      const cursorOffsetY = e.clientY - (rect.top + rect.height / 2);
      const ratio = nextScale / current.scale;

      const rawX = cursorOffsetX - (cursorOffsetX - current.x) * ratio;
      const rawY = cursorOffsetY - (cursorOffsetY - current.y) * ratio;
      const clamped = clampPanPosition({ x: rawX, y: rawY }, nextScale);

      applyTransform({
        scale: nextScale,
        x: clamped.x,
        y: clamped.y,
      });
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [applyTransform, clampPanPosition]);

  // Unified pointer & touch pinch/pan handling on the artwork stage
  const handleStagePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;

    activePointersRef.current.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY,
    });

    if (activePointersRef.current.size === 2) {
      const pts: { x: number; y: number }[] = Array.from(
        activePointersRef.current.values()
      );
      const dist = getDistance(pts[0], pts[1]);
      const current = transformRef.current;
      pinchSessionRef.current = {
        initialDistance: Math.max(dist, 10),
        initialScale: current.scale,
        originX: current.x,
        originY: current.y,
      };
      dragSessionRef.current.pointerId = null;
      setIsInteracting(true);
      return;
    }

    if (activePointersRef.current.size === 1) {
      const current = transformRef.current;
      dragSessionRef.current = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        originX: current.x,
        originY: current.y,
        hasMoved: false,
      };
      if (current.scale > MIN_ZOOM) {
        setIsInteracting(true);
      }
    }
  };

  const handleStagePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activePointersRef.current.has(e.pointerId)) return;
    activePointersRef.current.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY,
    });

    // Two-finger pinch zoom on mobile & tablet
    if (activePointersRef.current.size === 2 && pinchSessionRef.current) {
      const pts: { x: number; y: number }[] = Array.from(
        activePointersRef.current.values()
      );
      const dist = getDistance(pts[0], pts[1]);
      const session = pinchSessionRef.current;
      const rawScale =
        session.initialScale * (dist / Math.max(session.initialDistance, 10));
      const nextScale = Math.min(
        Math.max(MIN_ZOOM, Number(rawScale.toFixed(2))),
        MAX_ZOOM
      );

      if (nextScale <= MIN_ZOOM) {
        applyTransform(DEFAULT_TRANSFORM);
      } else {
        const ratio = nextScale / Math.max(session.initialScale, MIN_ZOOM);
        const clamped = clampPanPosition(
          {
            x: session.originX * ratio,
            y: session.originY * ratio,
          },
          nextScale
        );
        applyTransform({
          scale: nextScale,
          x: clamped.x,
          y: clamped.y,
        });
      }
      return;
    }

    // Single-pointer drag panning when zoomed in (> 1x)
    const drag = dragSessionRef.current;
    if (drag.pointerId !== e.pointerId) return;

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;

    if (!drag.hasMoved && Math.hypot(dx, dy) > 3) {
      drag.hasMoved = true;
      if (
        transformRef.current.scale > MIN_ZOOM &&
        !e.currentTarget.hasPointerCapture(e.pointerId)
      ) {
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // Ignore pointer capture errors
        }
      }
    }

    const current = transformRef.current;
    if (current.scale <= MIN_ZOOM) return;

    const clamped = clampPanPosition(
      {
        x: drag.originX + dx,
        y: drag.originY + dy,
      },
      current.scale
    );

    applyTransform({
      scale: current.scale,
      x: clamped.x,
      y: clamped.y,
    });
  };

  const handleStagePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragSessionRef.current;
    const wasSingleFinger =
      activePointersRef.current.size === 1 && drag.pointerId === e.pointerId;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;

    activePointersRef.current.delete(e.pointerId);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore release errors
      }
    }

    // Horizontal touch swipe at 1x zoom switches to next/previous mockup smoothly
    if (
      wasSingleFinger &&
      e.pointerType === "touch" &&
      transformRef.current.scale <= MIN_ZOOM &&
      Math.abs(dx) > 56 &&
      Math.abs(dx) > Math.abs(dy) * 1.6
    ) {
      if (dx < 0) {
        handleNextDesign();
      } else {
        handlePrevDesign();
      }
    }

    if (activePointersRef.current.size < 2) {
      pinchSessionRef.current = null;
    }

    if (activePointersRef.current.size === 0) {
      dragSessionRef.current.pointerId = null;
      setIsInteracting(false);
      if (transformRef.current.scale <= 1.02) {
        applyTransform(DEFAULT_TRANSFORM);
      }
    }
  };

  const handleStageDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const current = transformRef.current;
    if (current.scale > MIN_ZOOM) {
      resetZoomAndPan();
      return;
    }
    const container = containerRef.current;
    const targetScale = 2;
    if (!container) {
      applyTransform({ scale: targetScale, x: 0, y: 0 });
      return;
    }
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    const clamped = clampPanPosition(
      { x: -offsetX * 0.6, y: -offsetY * 0.6 },
      targetScale
    );
    applyTransform({
      scale: targetScale,
      x: clamped.x,
      y: clamped.y,
    });
  };

  const isZoomInDisabled = transform.scale >= MAX_ZOOM;
  const isAtDefaultZoom =
    transform.scale <= MIN_ZOOM && transform.x === 0 && transform.y === 0;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex flex-col select-none overflow-hidden"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5 border-b border-black/5 bg-white/85 backdrop-blur-xl z-30 shrink-0">
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100/90 hover:bg-zinc-200/80 text-zinc-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0"
            aria-label="Back to My Work"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to My Work</span>
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-zinc-900 tracking-tight truncate">
                {project.title}
              </h3>
              <span
                className="text-zinc-400 font-medium select-none"
                aria-hidden="true"
              >
                ·
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-600 shrink-0 tabular-nums">
                {selectedIndex + 1} / {project.designs.length}
              </span>
            </div>
          </div>
        </div>

        {/* Top Right Zoom Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {transform.scale > MIN_ZOOM && (
            <button
              type="button"
              onClick={handleZoomOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100/90 hover:bg-zinc-200/80 text-zinc-700 text-xs font-medium transition-all cursor-pointer tabular-nums"
              title="Reset Zoom to 100%"
              aria-label="Reset Zoom"
            >
              <RotateCcw size={13} />
              <span>{Math.round(transform.scale * 100)}%</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Fullscreen Stage */}
      <div className="relative flex-1 min-h-0 w-full flex flex-col md:flex-row overflow-hidden bg-zinc-50/60">
        {/* Left-Side Project Information Area */}
        <aside
          onClick={(e) => {
            e.stopPropagation();
            if (isGalleryOpen || isShareOpen) {
              setIsGalleryOpen(false);
              setIsShareOpen(false);
            }
          }}
          onPointerDown={(e) => e.stopPropagation()}
          onDoubleClick={(e) => e.stopPropagation()}
          aria-label="Project Information"
          className="w-full md:w-72 lg:w-88 xl:w-100 shrink-0 max-h-[22vh] sm:max-h-[25vh] md:max-h-full md:h-full overflow-y-auto border-b md:border-b-0 md:border-r border-black/[0.06] bg-white/80 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 md:px-7 md:py-8 lg:px-9 lg:py-10 flex flex-col md:justify-center select-text z-10"
        >
          <div className="max-w-md">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-1 md:mb-2.5">
              {project.brand}
            </span>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-[26px] font-semibold text-zinc-900 tracking-tight leading-snug mb-1.5 md:mb-4">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-zinc-600 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </aside>

        {/* Main Artwork & Controls Stage */}
        <div className="relative flex-1 min-w-0 min-h-0 w-full h-full flex flex-col items-center justify-between lg:justify-center overflow-y-auto lg:overflow-hidden px-3 py-2 sm:px-5 sm:py-3 lg:p-0">
          {/* 1. Main Artwork Canvas */}
          <div
            ref={containerRef}
            onPointerDown={handleStagePointerDown}
            onPointerMove={handleStagePointerMove}
            onPointerUp={handleStagePointerUp}
            onPointerCancel={handleStagePointerUp}
            onDoubleClick={handleStageDoubleClick}
            onClick={(e) => {
              if (dragSessionRef.current.hasMoved) {
                dragSessionRef.current.hasMoved = false;
                return;
              }
              if (isGalleryOpen || isShareOpen) {
                setIsGalleryOpen(false);
                setIsShareOpen(false);
                return;
              }
              if (
                (e.target === e.currentTarget ||
                  e.target === transformLayerRef.current) &&
                transformRef.current.scale <= MIN_ZOOM
              ) {
                onClose();
              }
            }}
            style={{ touchAction: "none" }}
            className={`relative w-full flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-4 lg:p-12 lg:pr-28 lg:h-full ${
              isGalleryOpen || isShareOpen
                ? "min-h-[160px] sm:min-h-[220px]"
                : "min-h-[220px] sm:min-h-[300px]"
            }`}
          >
            {/* Dedicated GPU-Composited Zoom & Pan Container */}
            <div
              ref={transformLayerRef}
              style={{
                transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
                transformOrigin: "center center",
                transition: isInteracting
                  ? "none"
                  : "transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform",
              }}
              className="w-full h-full flex items-center justify-center pointer-events-none"
            >
              {hasImageError ? (
                <div className="pointer-events-auto flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/90 border border-black/10 shadow-sm text-center max-w-xs">
                  <AlertCircle size={22} className="text-zinc-500" />
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Unable to load {currentDesign.label}.
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHasImageError(false);
                    }}
                    className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <img
                  ref={imageRef}
                  src={encodeURI(currentDesign.src)}
                  alt={currentDesign.label}
                  width={currentDesign.width}
                  height={currentDesign.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                  onLoad={() => {
                    decodedImageUrls.add(encodeURI(currentDesign.src));
                    decodedImageUrls.add(currentDesign.src);
                    if (transformRef.current.scale <= MIN_ZOOM) {
                      applyTransform(DEFAULT_TRANSFORM);
                    }
                  }}
                  onError={() => setHasImageError(true)}
                  onClick={(e) => {
                    if (dragSessionRef.current.hasMoved) {
                      return;
                    }
                    if (isGalleryOpen || isShareOpen) {
                      e.stopPropagation();
                      setIsGalleryOpen(false);
                      setIsShareOpen(false);
                    }
                  }}
                  style={{
                    cursor:
                      transform.scale > MIN_ZOOM
                        ? isInteracting
                          ? "grabbing"
                          : "grab"
                        : "zoom-in",
                    touchAction: "none",
                  }}
                  className="pointer-events-auto max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-sm select-none"
                />
              )}
            </div>
          </div>

          {/* 2. Apple-Style Pill Control Bar:
              Horizontal directly below the main image on mobile & tablet (< lg),
              Vertical on the right side of the image on laptop & desktop (>= lg) */}
          <div
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onDoubleClick={(e) => e.stopPropagation()}
            role="toolbar"
            aria-label="Previewer Controls"
            className="relative z-30 shrink-0 mx-auto my-1.5 sm:my-2.5 lg:my-0 lg:mx-0 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 flex flex-row lg:flex-col flex-nowrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 lg:p-2.5 max-w-[calc(100vw-1.5rem)] overflow-x-auto lg:overflow-visible rounded-full bg-white/85 backdrop-blur-2xl border border-white/90 ring-1 ring-black/[0.08] shadow-[0_14px_44px_rgba(0,0,0,0.12)]"
          >
            {/* Group 1: Navigation */}
            {/* 1. Previous Design (<) */}
            <button
              type="button"
              onClick={handlePrevDesign}
              title="Previous Design (Left Arrow)"
              aria-label="Previous Design"
              className="w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-zinc-950 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft size={19} strokeWidth={2.1} />
            </button>

            {/* 2. Next Design (>) */}
            <button
              type="button"
              onClick={handleNextDesign}
              title="Next Design (Right Arrow)"
              aria-label="Next Design"
              className="w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-zinc-950 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight size={19} strokeWidth={2.1} />
            </button>

            {/* Thin Divider (Vertical on mobile/tablet, Horizontal on desktop) */}
            <div
              className="w-px h-5 sm:h-6 lg:w-7 lg:h-px bg-zinc-200/90 mx-0.5 lg:mx-0 lg:my-0.5 shrink-0"
              aria-hidden="true"
            />

            {/* Group 2: Zoom Controls */}
            {/* 3. Zoom In */}
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={isZoomInDisabled}
              title={
                isZoomInDisabled
                  ? "Maximum Zoom Reached (400%)"
                  : "Zoom In (+)"
              }
              aria-label="Zoom In"
              className="w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-zinc-950 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-all cursor-pointer"
            >
              <ZoomIn size={19} strokeWidth={2} />
            </button>

            {/* 4. Zoom Out (One-Click Full Fit Reset) */}
            <button
              type="button"
              onClick={handleZoomOut}
              title={
                isAtDefaultZoom
                  ? "Default Fitted Size (100%)"
                  : "Zoom Out to Full View (-)"
              }
              aria-label="Zoom Out"
              className={`w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-zinc-950 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer ${
                isAtDefaultZoom ? "opacity-50" : "opacity-100"
              }`}
            >
              <ZoomOut size={19} strokeWidth={2} />
            </button>

            {/* Thin Divider (Vertical on mobile/tablet, Horizontal on desktop) */}
            <div
              className="w-px h-5 sm:h-6 lg:w-7 lg:h-px bg-zinc-200/90 mx-0.5 lg:mx-0 lg:my-0.5 shrink-0"
              aria-hidden="true"
            />

            {/* Group 3: Utility & Close */}
            {/* 5. Grid Button */}
            <button
              type="button"
              onClick={handleToggleGallery}
              aria-expanded={isGalleryOpen}
              title={
                isGalleryOpen
                  ? "Hide Project Gallery"
                  : `View ${project.brand} Gallery (${project.designs.length} ${project.designs.length === 1 ? "Mockup" : "Mockups"})`
              }
              aria-label="Toggle Design Gallery"
              className={`w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer ${
                isGalleryOpen
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                  : "bg-white text-zinc-950 border-black/[0.05] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              }`}
            >
              <LayoutGrid size={18} strokeWidth={2} />
            </button>

            {/* 6. Share Button */}
            <button
              type="button"
              onClick={handleShareClick}
              aria-expanded={isShareOpen}
              title={`Share ${currentDesign.label}`}
              aria-label={`Share ${currentDesign.label}`}
              className={`w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer ${
                isShareOpen
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                  : "bg-white text-zinc-950 border-black/[0.05] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              }`}
            >
              <Share2 size={18} strokeWidth={2} />
            </button>

            {/* 7. Close Button (X) */}
            <button
              type="button"
              onClick={onClose}
              title="Close Viewer (Esc)"
              aria-label="Close Viewer"
              className="w-9 h-9 min-[390px]:w-10 min-[390px]:h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white text-zinc-950 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-zinc-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 flex items-center justify-center transition-all cursor-pointer"
            >
              <X size={19} strokeWidth={2.1} />
            </button>
          </div>

          {/* 3. Expandable Apple-Style Design Gallery Panel:
              Below the horizontal controls on mobile & tablet (< lg),
              Floating beside the vertical toolbar on desktop (>= lg) */}
          <AnimatePresence>
            {isGalleryOpen && (
              <motion.aside
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                role="dialog"
                aria-label={`${project.brand} Design Variations`}
                className="relative w-full max-w-md sm:max-w-lg mx-auto mt-1 mb-1 h-56 sm:h-64 max-h-[34vh] shrink-0 lg:m-0 lg:absolute lg:inset-x-auto lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-24 lg:w-96 lg:h-auto lg:max-h-[calc(100%-3rem)] z-30 flex flex-col rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 ring-1 ring-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.16)] overflow-hidden"
              >
                {/* Gallery Header */}
                <div className="px-4 sm:px-5 py-3.5 border-b border-black/[0.06] bg-white/60 flex items-center justify-between shrink-0">
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 truncate">
                        {project.title}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zinc-900/5 text-zinc-600 tabular-nums shrink-0">
                        {selectedIndex + 1} / {project.designs.length}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-zinc-900 tracking-tight truncate mt-0.5">
                      {project.brand} Gallery
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsGalleryOpen(false)}
                    className="p-2 rounded-full bg-zinc-100/90 hover:bg-zinc-200/80 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer shrink-0"
                    title="Close Gallery (Esc)"
                    aria-label="Close Gallery"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Vertically Scrollable Thumbnail Grid (1 thumbnail per row on mobile, tablet, and desktop) */}
                <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-3.5 sm:p-4 grid grid-cols-1 gap-3 scroll-smooth">
                  {project.designs.map((design, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={design.src}
                        ref={(el) => {
                          thumbnailRefs.current[idx] = el;
                        }}
                        type="button"
                        onClick={() => handleSelectDesign(idx)}
                        className={`group w-full text-left rounded-2xl p-2.5 transition-all duration-150 cursor-pointer border flex flex-col gap-2 ${
                          isSelected
                            ? "bg-zinc-900/[0.05] border-zinc-900 ring-2 ring-zinc-900/15 shadow-sm"
                            : "bg-white/80 hover:bg-white border-black/[0.07] hover:border-zinc-300"
                        }`}
                      >
                        <div className="w-full aspect-[16/10] rounded-xl bg-zinc-50/90 border border-black/5 overflow-hidden flex items-center justify-center p-2">
                          <picture className="w-full h-full flex items-center justify-center">
                            <source
                              srcSet={design.thumbWebp}
                              type="image/webp"
                            />
                            <img
                              src={encodeURI(design.src)}
                              alt={design.label}
                              width={design.width}
                              height={design.height}
                              decoding="async"
                              draggable={false}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </picture>
                        </div>
                        <div className="flex items-center justify-between px-1 gap-2">
                          <span
                            className={`text-xs sm:text-sm tracking-tight truncate ${
                              isSelected
                                ? "font-semibold text-zinc-900"
                                : "font-medium text-zinc-600 group-hover:text-zinc-900"
                            }`}
                          >
                            {design.label}
                          </span>
                          <span
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 tabular-nums ${
                              isSelected
                                ? "bg-zinc-900 text-white"
                                : "bg-zinc-100 text-zinc-500"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Expandable Apple-Style Share Popover */}
          <AnimatePresence>
            {isShareOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                role="dialog"
                aria-label="Share this design"
                className="relative w-full max-w-md sm:max-w-lg mx-auto mt-1 mb-1 shrink-0 lg:m-0 lg:absolute lg:inset-x-auto lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-24 lg:w-88 z-30 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 ring-1 ring-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.16)] p-4 sm:p-5 flex flex-col gap-3.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Link2 size={16} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-zinc-900 tracking-tight truncate">
                        Share Design Link
                      </h4>
                      <p className="text-xs text-zinc-500 truncate">
                        {project.brand} • {currentDesign.label}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsShareOpen(false)}
                    className="p-1.5 rounded-full bg-zinc-100/90 hover:bg-zinc-200/80 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer shrink-0"
                    aria-label="Close Share Panel"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Thumbnail Preview inside Share Sheet */}
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-zinc-50/90 border border-black/[0.06]">
                  <div className="w-14 h-10 rounded-lg bg-white border border-black/5 overflow-hidden flex items-center justify-center p-1 shrink-0">
                    <picture className="w-full h-full flex items-center justify-center">
                      <source
                        srcSet={currentDesign.thumbWebp}
                        type="image/webp"
                      />
                      <img
                        src={encodeURI(currentDesign.src)}
                        alt={currentDesign.label}
                        width={currentDesign.width}
                        height={currentDesign.height}
                        decoding="async"
                        className="w-full h-full object-contain"
                      />
                    </picture>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-zinc-900 truncate">
                      {currentDesign.label}
                    </p>
                    <p className="text-[11px] text-zinc-500 truncate">
                      {project.title} — Variation {selectedIndex + 1} of{" "}
                      {project.designs.length}
                    </p>
                  </div>
                </div>

                {/* Selectable Direct URL Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="share-design-url-input"
                    className="text-[11px] font-medium uppercase tracking-wider text-zinc-400"
                  >
                    Direct Link to This Image
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="share-design-url-input"
                      ref={shareInputRef}
                      type="text"
                      readOnly
                      value={shareUrl}
                      onFocus={(e) => e.currentTarget.select()}
                      onClick={(e) => e.currentTarget.select()}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-100/90 border border-black/[0.08] text-xs text-zinc-700 font-mono focus:outline-none focus:ring-2 focus:ring-zinc-900/20 select-all"
                    />
                  </div>
                </div>

                {/* Copy Link Action Button */}
                <button
                  type="button"
                  onClick={copyLinkToClipboard}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.99] ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-900 hover:bg-zinc-800 text-white"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>,
    document.body
  );
}

export function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewerState, setViewerState] = useState<{
    project: Project;
    designIndex: number;
  } | null>(() => {
    if (typeof window === "undefined") return null;
    const resolved = resolveDeepLinkFromSearch(window.location.search);
    if (!resolved && window.location.search) {
      clearDeepLinkParamsFromUrl();
    }
    return resolved;
  });

  useEffect(() => {
    warmUpPortfolioAssets();
  }, []);

  useEffect(() => {
    const syncFromLocation = () => {
      const resolved = resolveDeepLinkFromSearch(window.location.search);
      if (resolved) {
        setViewerState(resolved);
      } else {
        if (window.location.search) {
          clearDeepLinkParamsFromUrl();
        }
        setViewerState(null);
      }
    };

    window.addEventListener("popstate", syncFromLocation);
    return () => window.removeEventListener("popstate", syncFromLocation);
  }, []);

  const handleOpenProject = useCallback(
    (project: Project, designIndex = 0) => {
      preloadProjectAssets(project, designIndex);
      setViewerState({ project, designIndex });
      syncDeepLinkParamsToUrl(project, designIndex);
    },
    []
  );

  const handleCloseViewer = useCallback(() => {
    setViewerState(null);
    clearDeepLinkParamsFromUrl();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <div
        ref={scrollRef}
        className="absolute inset-0 flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col py-6 md:py-8 min-h-min pb-24 md:pb-28">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="mb-10 md:mb-14"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
              My{" "}
              <span className="text-zinc-400 font-light italic">
                Work.
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-500 font-light max-w-2xl leading-relaxed">
              A curated collection of brand identities, packaging systems, and visual communication projects crafted with precision and strategic clarity.
            </p>
          </motion.div>

          {/* 5 Graphic Design Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  delay: 0.06 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: "transform, opacity" }}
                onPointerEnter={() => preloadProjectAssets(project, 0)}
                onFocus={() => preloadProjectAssets(project, 0)}
                onTouchStart={() => preloadProjectAssets(project, 0)}
                onClick={() => handleOpenProject(project, 0)}
                aria-label={`${project.title} — ${project.brand} (${project.designs.length} ${project.designs.length === 1 ? "Mockup" : "Mockups"})`}
                className="group glass-card bg-white/70 border border-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:bg-white/95 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative w-full aspect-[16/10] bg-zinc-50/80 overflow-hidden flex items-center justify-center p-4 sm:p-6">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet={project.coverWebp} type="image/webp" />
                    <img
                      src={encodeURI(project.coverImage)}
                      alt={`${project.title} — ${project.brand}`}
                      width={project.coverWidth}
                      height={project.coverHeight}
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index < 2 ? "high" : "auto"}
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-300 flex items-end justify-end p-4 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-zinc-800 text-xs font-medium shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-black/5">
                      <Maximize2 size={13} />
                      View {project.designs.length} {project.designs.length === 1 ? "Mockup" : "Mockups"}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex items-center justify-between gap-4 border-t border-black/5 bg-white/60">
                  <div className="min-w-0 flex flex-col gap-1.5">
                    <h3 className="text-xl md:text-2xl font-medium text-zinc-900 tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                        {project.brand}
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 tabular-nums">
                        {project.designs.length} {project.designs.length === 1 ? "Mockup" : "Mockups"}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-100/80 group-hover:bg-zinc-900 group-hover:text-white text-zinc-600 flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Project-Specific Image Viewer */}
      <AnimatePresence>
        {viewerState && (
          <FullscreenViewer
            project={viewerState.project}
            initialDesignIndex={viewerState.designIndex}
            onClose={handleCloseViewer}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
