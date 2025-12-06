import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Send, X, Sparkles, ThumbsUp, ThumbsDown, Copy, RotateCcw, Share, Bookmark, ChevronDown, Mic } from 'lucide-react';
import svgPaths from '../imports/svg-rq15tm1ymb';
import overlaySvgPaths from '../imports/svg-ochy35uoop';

// --- SVG Components from Figma Import ---

function SecuritySettings() {
  return (
    <div className="absolute h-[23.179px] left-[7.9px] top-[6.93px] w-[79.698px]">
      <svg className="block size-full" fill="none" viewBox="0 0 80 24">
          <path d={svgPaths.p4563400} fill="black" />
          <path d={svgPaths.p353c6930} fill="black" />
          <path d={svgPaths.p2c183b00} fill="black" />
          <path d={svgPaths.p2bfff400} fill="black" />
          <path d={svgPaths.p18931680} fill="black" />
          <path d={svgPaths.p2c5c9b00} fill="black" />
          <path d={svgPaths.p27509100} fill="black" />
          <path d={svgPaths.p2771f400} fill="black" />
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="relative size-[24px] flex items-center justify-center">
       {/* Simplified Logo for Header */}
       <Sparkles className="text-[#0280ef]" size={18} fill="#0280ef" fillOpacity={0.2} />
    </div>
  );
}

// --- Chat Components ---

function Message({ role, content, timestamp, isTyping }: { role: 'user' | 'ai', content: React.ReactNode, timestamp: string, isTyping?: boolean }) {
  return (
    <div className={`flex flex-col gap-1 w-full ${role === 'user' ? 'items-end' : 'items-start'}`}>
       <div className={`relative max-w-[85%] md:max-w-[75%] p-3 shadow-sm text-[12px] leading-[1.5] text-[#264769] group
         ${role === 'ai' 
           ? 'bg-[#f4f7fb] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-[4px]' 
           : 'bg-white border border-[#d4d6db] rounded-tl-xl rounded-tr-xl rounded-br-[4px] rounded-bl-xl'
         }`}>
         
         {role === 'ai' && (
            <div className="absolute -top-2 -left-2 bg-white rounded-full p-0.5 shadow-sm border border-[#edeef0]">
               <Sparkles size={12} className="text-[#0280ef]" fill="#0280ef" fillOpacity={0.2} />
            </div>
         )}

         {isTyping ? (
             <div className="flex items-center gap-1 h-[18px]">
                 <div className="w-1.5 h-1.5 bg-[#0280ef] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                 <div className="w-1.5 h-1.5 bg-[#0280ef] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                 <div className="w-1.5 h-1.5 bg-[#0280ef] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
             </div>
         ) : (
             <div className="whitespace-pre-wrap">{content}</div>
         )}

         {/* Reaction Toolbar (AI only) */}
         {role === 'ai' && !isTyping && (
             <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white shadow-sm rounded p-1">
                 <Copy size={12} className="text-[#5b626e] hover:text-[#0280ef] cursor-pointer" />
                 <RotateCcw size={12} className="text-[#5b626e] hover:text-[#0280ef] cursor-pointer" />
                 <ThumbsUp size={12} className="text-[#5b626e] hover:text-[#0280ef] cursor-pointer" />
                 <ThumbsDown size={12} className="text-[#5b626e] hover:text-[#ec0139] cursor-pointer" />
             </div>
         )}
       </div>
       <span className="text-[10px] text-[#5b626e] px-1">{timestamp}</span>
    </div>
  );
}

function SuggestionChip({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#015ecb] rounded-full hover:bg-[#e5f6ff] transition-colors group">
            <Sparkles size={10} className="text-[#015ecb]" />
            <span className="text-[12px] text-[#015ecb] whitespace-nowrap">{text}</span>
        </button>
    );
}

// --- Main Overlay Component ---

export function SocXChatOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [messages, setMessages] = useState<any[]>([
        { id: 1, role: 'ai', content: "Hi I’m SOCXpert! You can ask me anything you want to know about this attack analysis or get some explanations about the Analysis recommendations.", timestamp: '2:30 PM' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
             document.body.style.overflow = 'hidden';
        } else {
             document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        
        const userMsg = { id: Date.now(), role: 'user', content: inputValue, timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Mock AI response
        setTimeout(() => {
            setIsTyping(false);
            const aiMsg = { 
                id: Date.now() + 1, 
                role: 'ai', 
                content: "I've analyzed the traffic patterns. Approximately 30% of the attack traffic is originating from Russia, while peacetime traffic from this region is usually around 0.001%. This indicates a significant anomaly.", 
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1500);
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex justify-end isolate">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/30 backdrop-blur-[2px] animate-in fade-in duration-200"
                onClick={onClose}
            />
            
            {/* Panel */}
            <div className="relative w-full sm:w-[400px] h-full bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.15)] flex flex-col animate-in slide-in-from-right duration-300 border-l border-[#edeef0]">
                {/* Header */}
                <div className="h-[60px] border-b border-[#edeef0] flex items-center justify-between px-5 bg-white shrink-0">
                    <div className="flex items-center gap-2">
                        <LogoIcon />
                        <span className="text-[19px] font-light text-[#264769]">Chat</span>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-[#f5f6f8] rounded-full transition-colors text-[#5b626e]">
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white custom-scrollbar">
                    {messages.map((msg) => (
                        <Message key={msg.id} {...msg} />
                    ))}
                    {isTyping && (
                        <Message role="ai" content="" timestamp="Thinking..." isTyping={true} />
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                <div className="px-5 pb-3 pt-2 flex gap-2 overflow-x-auto no-scrollbar">
                    <SuggestionChip text="Top 100 source IPs" onClick={() => setInputValue("Show me top 100 source IP addresses")} />
                    <SuggestionChip text="Traffic from Russia" onClick={() => setInputValue("What percentage of traffic is from Russia?")} />
                    <SuggestionChip text="Attack Analysis" onClick={() => setInputValue("Analyze this attack")} />
                </div>

                {/* Input */}
                <div className="p-5 border-t border-[#edeef0] bg-white shrink-0">
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-xl border border-[#d4d6db] pointer-events-none group-focus-within:border-[#0280ef] group-focus-within:ring-2 group-focus-within:ring-[#0280ef]/10 transition-all" />
                        <textarea 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                            placeholder="Type your question..."
                            className="w-full min-h-[80px] p-3 pr-10 text-[12px] text-[#264769] placeholder-[#5b626e] bg-transparent border-none outline-none resize-none leading-[1.5]"
                        />
                        <div className="absolute bottom-3 right-3 flex items-center gap-2">
                             {/* Voice (Visual only) */}
                             {/* <Mic size={16} className="text-[#5b626e] cursor-pointer hover:text-[#0280ef]" /> */}
                             <button 
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all ${inputValue.trim() ? 'bg-[#0280ef] text-white hover:scale-110 shadow-lg' : 'bg-transparent text-[#a9aeb7]'}`}
                             >
                                <Send size={14} className={inputValue.trim() ? 'ml-0.5' : ''} />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

// --- Logic Wrapper for Header ---

export function SocXChatManager() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Button Content (From Figma selection) */}
            <div 
                className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full cursor-pointer hover:brightness-110 transition-all"
                onClick={() => setIsOpen(true)}
            >
                <div className="h-[22px] relative shrink-0 w-[85.807px]" data-name="AI DOC Xpert logo">
                    {/* Frame1 */}
                    <div className="absolute bottom-0 left-[22.8%] right-0 top-0">
                        {/* SecuritySettings */}
                        <div className="absolute contents left-[5.75px] top-[5.08px]" data-name="security settings">
                            <div className="absolute h-[9.506px] left-[60.37px] top-[8.25px] w-[3.864px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 10">
                                        <path d={overlaySvgPaths.p8d22700} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[7.591px] left-[56.19px] top-[10.03px] w-[3.458px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 8">
                                        <path d={overlaySvgPaths.p32063780} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[7.729px] left-[48.43px] top-[10.03px] w-[6.137px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
                                        <path d={overlaySvgPaths.p3fb77580} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[12.054px] left-[41.05px] top-[10.03px] w-[6.006px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 13">
                                        <path d={overlaySvgPaths.p3b56f100} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[12.535px] left-[29.83px] top-[5.08px] w-[11.011px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                                        <path d={overlaySvgPaths.p16eb2b00} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[10.335px] left-[22.42px] top-[7.52px] w-[7.282px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                                        <path d={overlaySvgPaths.p3320a00} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[10.335px] left-[13.97px] top-[7.52px] w-[7.282px]" data-name="Vector">
                                <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                                        <path d={overlaySvgPaths.p4e02000} fill="var(--fill-0, white)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-[9.998px] left-[5.75px] top-[7.62px] w-[6.899px]" data-name="Union">
                                <div className="absolute inset-[-1.2%_-1.74%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                                        <g id="Union">
                                            <mask fill="black" height="12" id="path-1-outside-1_1_4408" maskUnits="userSpaceOnUse" width="9" x="-0.88" y="-0.88">
                                                <rect fill="white" height="12" width="9" x="-0.88" y="-0.88" />
                                                <path d={overlaySvgPaths.p1e887100} />
                                            </mask>
                                            <path d={overlaySvgPaths.p1e887100} fill="var(--fill-0, white)" />
                                            <path d={overlaySvgPaths.p119840f0} fill="var(--stroke-0, white)" mask="url(#path-1-outside-1_1_4408)" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Frame */}
                        <div className="absolute h-[2.584px] left-[44.33px] top-[19.5px] w-[10.1px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 3">
                                <g id="Frame 21874">
                                    <circle cx="1.29192" cy="1.29192" fill="var(--fill-0, #29DF76)" id="Ellipse 303" r="1.29192" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 2.58386 2.5839)" />
                                    <circle cx="1.29192" cy="1.29192" fill="var(--fill-0, #FFE207)" id="Ellipse 304" r="1.29192" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 6.34211 2.5839)" />
                                    <circle cx="1.29192" cy="1.29192" fill="var(--fill-0, #FC4C5D)" id="Ellipse 302" r="1.29192" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 10.1004 2.5839)" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    {/* Vector (Logo Text) */}
                    <div className="absolute inset-[2.86%_75.79%_21.11%_0.19%]" data-name="Vector">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 17">
                                <g id="Vector">
                                    <path d={overlaySvgPaths.p3c2d800} fill="var(--fill-0, white)" />
                                    <path d={overlaySvgPaths.p3be9b780} fill="var(--fill-0, white)" />
                                    <path d={overlaySvgPaths.p435a280} fill="var(--fill-0, white)" />
                                    <path d={overlaySvgPaths.p3c8eaf00} fill="var(--fill-0, white)" />
                                    <path d={overlaySvgPaths.p21a7e00} fill="var(--fill-0, white)" />
                                    <path d={overlaySvgPaths.p38527300} fill="var(--fill-0, white)" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Portal */}
            <SocXChatOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
