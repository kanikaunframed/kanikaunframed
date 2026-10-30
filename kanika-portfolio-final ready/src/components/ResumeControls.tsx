import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  Eye,
  Download,
  X,
  ExternalLink,
  FileText,
} from "lucide-react";

// Keep the original PDF in /public. Vite copies it byte-for-byte to the build output.
const RAW_BASE_URL =
  (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL || "/";
const NORMALIZED_BASE_URL = RAW_BASE_URL.replace(/\/?$/, "/");
export const RESUME_ASSET_URL = `${NORMALIZED_BASE_URL}Resume.Pdf`;
export const RESUME_DOWNLOAD_FILENAME = "Resume.Pdf";

interface ResumeControlsProps {
  className?: string;
}

export function ResumeControls({ className = "" }: ResumeControlsProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          aria-label="View Resume"
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-medium tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-zinc-800 hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          <Eye size={16} className="text-white/90 transition-transform duration-300 group-hover:scale-110" />
          <span>View Resume</span>
        </button>

        <a
          href={RESUME_ASSET_URL}
          download={RESUME_DOWNLOAD_FILENAME}
          aria-label="Download Resume"
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-xl text-zinc-900 border border-black/10 text-xs sm:text-sm font-medium tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:bg-white hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
          <Download size={16} className="text-zinc-700 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span>Download Resume</span>
        </a>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isPreviewOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/55 backdrop-blur-md"
                onClick={() => setIsPreviewOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Resume Preview"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative w-full max-w-4xl h-[88dvh] bg-[#FAF9F6] border border-white/80 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.28)] flex flex-col overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 bg-white/85 backdrop-blur-xl border-b border-black/5 shrink-0">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 border border-black/5 flex items-center justify-center shrink-0">
                        <FileText size={15} className="text-zinc-700" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 truncate">
                          Kanika Agrawal — Resume
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                      <a
                        href={RESUME_ASSET_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open resume PDF in new tab"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full text-xs font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-100/80 hover:bg-zinc-200/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                      >
                        <ExternalLink size={13} />
                        <span>Open PDF</span>
                      </a>

                      <a
                        href={RESUME_ASSET_URL}
                        download={RESUME_DOWNLOAD_FILENAME}
                        aria-label="Download Resume PDF"
                        className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                      >
                        <Download size={13} />
                        <span>Download</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setIsPreviewOpen(false)}
                        aria-label="Close resume preview"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-900 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Use Chrome's built-in PDF viewer. This avoids PDF.js worker/MIME
                      problems that commonly occur on shared Apache hosting. */}
                  <div className="relative flex-1 min-h-0 w-full bg-zinc-100">
                    <iframe
                      key={RESUME_ASSET_URL}
                      src={`${RESUME_ASSET_URL}#toolbar=0&navpanes=0&view=FitH`}
                      title="Kanika Agrawal Resume PDF Preview"
                      className="absolute inset-0 w-full h-full border-0 bg-white"
                      loading="eager"
                      allow="fullscreen"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
