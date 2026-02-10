import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  { type: 'cmd', text: '$ git clone https://github.com/RabinPyakurel/portfolio.git' },
  { type: 'out', text: "Cloning into 'portfolio'..." },
  { type: 'out', text: 'remote: Enumerating objects: 142, done.' },
  { type: 'out', text: 'Receiving objects: 100% (142/142), done.' },
  { type: 'cmd', text: '$ cd portfolio' },
  { type: 'cmd', text: '$ npm install' },
  { type: 'out', text: 'added 312 packages in 4.2s' },
  { type: 'cmd', text: '$ npm run dev' },
  { type: 'out', text: '' },
  { type: 'out', text: '  VITE v6.0.3  ready in 420ms' },
  { type: 'out', text: '' },
  { type: 'out', text: '  ➜  Local:   http://localhost:5173/' },
  { type: 'out', text: '  ➜  Network: http://192.168.1.10:5173/' },
  { type: 'out', text: '' },
  { type: 'success', text: '✓ Portfolio loaded successfully.' },
];

const TerminalIntro = ({ onFinish }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);
  const bodyRef = useRef(null);

  const runSequence = useCallback(async () => {
    for (let i = 0; i < LINES.length; i++) {
      const line = LINES[i];
      const delay = line.type === 'cmd' ? 600 : line.text === '' ? 100 : 200;
      await new Promise((r) => setTimeout(r, delay));
      setVisibleLines((prev) => [...prev, line]);
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
    await new Promise((r) => setTimeout(r, 600));
    onFinish();
  }, [onFinish]);

  useEffect(() => {
    runSequence();
  }, [runSequence]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] p-4"
        >
          <div className="w-full max-w-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] rounded-t-xl border border-[#30363d] border-b-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-gray-500 font-mono">rabin@dev ~ portfolio</span>
            </div>

            {/* Terminal body */}
            <div ref={bodyRef} className="bg-[#0d1117] border border-[#30363d] border-t-0 rounded-b-xl p-4 sm:p-6 font-mono text-sm leading-relaxed min-h-[20rem] max-h-[70vh] overflow-y-auto scrollbar-thin">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`${
                    line.type === 'cmd'
                      ? 'text-[#7ee787]'
                      : line.type === 'success'
                        ? 'text-[#3fb950] font-bold'
                        : 'text-[#8b949e]'
                  } ${line.text === '' ? 'h-4' : ''}`}
                >
                  {line.text}
                </motion.div>
              ))}
              {!done && (
                <span className="inline-block w-2 h-4 bg-[#7ee787] animate-pulse ml-0.5" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalIntro;
