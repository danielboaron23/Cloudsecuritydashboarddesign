import React from 'react';
import { Shield, TriangleAlert, AlertCircle, ChevronRight, X, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Header } from './Header';

// Mock Data
const tokenUsageData = [
  { name: 'Used', value: 78.3 },
  { name: 'Remaining', value: 21.7 },
];
const COLORS = ['#0280ef', '#edeef0'];

const weeklyTrendData = [
  { name: 'W1', usage: 4000 },
  { name: 'W2', usage: 3000 },
  { name: 'W3', usage: 5000 }, // Peak
  { name: 'W4', usage: 2780 },
  { name: 'W5', usage: 4200 }, // Current
];

const agentUsageData = [
  { name: 'GPT-4', count: 12500, risk: 'High' },
  { name: 'Claude 3.5', count: 8400, risk: 'Medium' },
  { name: 'GitHub Copilot', count: 15200, risk: 'Low' },
];

const toolUsageData = [
  { name: 'OpenAI API', count: 45000, risk: 'High' },
  { name: 'Anthropic API', count: 12000, risk: 'Medium' },
  { name: 'Azure OpenAI', count: 28000, risk: 'Low' },
];

export function AgenticSummary() {
  return (
    <div className="flex flex-col h-full bg-[#f3f5f7] overflow-y-auto">
      <Header />
      
      <div className="p-5 flex flex-col gap-6 pb-10">
        {/* Page Title & Breadcrumb */}
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#5b626e] text-xs">
                <span>Home</span>
                <ChevronRight size={14} />
                <span className="text-[#264769] font-medium">Agentic Summary</span>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="text-[18px] text-[#264769] font-normal">Agentic Summary</h1>
            </div>
            
            {/* Tabs */}
            <div className="flex items-center border-b border-[#d4d6db]">
                {['OWASP Risks', 'Risk Matrix', 'Agents & Tools', 'Protection Tokens'].map((tab, i) => (
                    <button 
                        key={tab}
                        className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                            i === 0 
                            ? 'bg-[#edeef0] text-[#015ecb] border-b-2 border-[#015ecb]' 
                            : 'text-[#5b626e] hover:bg-[#f5f6f8] hover:text-[#264769]'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        {/* Top Banner Section */}
        <div className="grid grid-cols-3 gap-5">
            <StatCard 
                icon={<Shield size={24} className="text-[#156c42]" />} 
                count="142" 
                label="Secure AI Agents" 
            />
            <StatCard 
                icon={<TriangleAlert size={24} className="text-[#ec0139]" />} 
                count="12" 
                label="Risks Detected" 
            />
            <StatCard 
                icon={<AlertCircle size={24} className="text-[#ff8c00]" />} 
                count="4,291" 
                label="Security Events" 
            />
        </div>

        {/* OWASP Top 10 Section */}
        <div className="grid grid-cols-2 gap-5">
            <Card title="OWASP Top 10 Events">
                <div className="mt-4">
                    <Table 
                        headers={['Event Category', 'Count', '']} 
                        rows={[
                            ['Prompt Injection', '1,240', <LinkButton />],
                            ['Insecure Output Handling', '892', <LinkButton />],
                            ['Model Denial of Service', '654', <LinkButton />],
                            ['Sensitive Info Disclosure', '432', <LinkButton />],
                            ['Supply Chain Vulnerabilities', '211', <LinkButton />],
                        ]} 
                    />
                </div>
            </Card>
            <Card title="OWASP Top 10 Violations">
                <div className="mt-4">
                    <Table 
                        headers={['Violation Type', 'Count', '']} 
                        rows={[
                            ['LLM01: Prompt Injection', '145', <LinkButton />],
                            ['LLM02: Insecure Output', '98', <LinkButton />],
                            ['LLM06: Sensitive Info', '87', <LinkButton />],
                            ['LLM04: DOS', '45', <LinkButton />],
                            ['LLM05: Supply Chain', '12', <LinkButton />],
                        ]} 
                    />
                </div>
            </Card>
        </div>

        {/* Critical Risk Alert Banner */}
        <div className="bg-[#ec0139] rounded-lg px-5 py-3 flex items-center justify-between text-white shadow-sm">
            <div className="flex items-center gap-3">
                <div className="bg-white/20 p-1.5 rounded-full">
                    <TriangleAlert size={20} className="text-white" />
                </div>
                <span className="font-medium">3 Critical Risks Detected</span>
                <span className="text-white/80 text-sm border-l border-white/30 pl-3">Immediate action required for 2 agents</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-white text-[#ec0139] px-3 py-1.5 rounded text-sm font-medium hover:bg-white/90 transition-colors">
                    View Details
                </button>
                <button className="hover:bg-white/20 p-1 rounded transition-colors">
                    <X size={18} />
                </button>
            </div>
        </div>

        {/* Risk Matrix Section */}
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
                <Card title="Risk Matrix">
                    <div className="mt-6 flex">
                         {/* Y Axis Label */}
                         <div className="flex items-center justify-center mr-4">
                             <span className="text-xs font-medium text-[#5b626e] -rotate-90 whitespace-nowrap">Business Priority</span>
                         </div>
                         
                         <div className="flex-1 flex flex-col gap-2">
                             {/* Matrix Grid */}
                             <div className="grid grid-cols-4 gap-2">
                                 {/* Headers */}
                                 <div className="col-start-2 text-center text-xs font-medium text-[#5b626e]">Low</div>
                                 <div className="text-center text-xs font-medium text-[#5b626e]">Medium</div>
                                 <div className="text-center text-xs font-medium text-[#5b626e]">High</div>
                                 <div className="text-center text-xs font-medium text-[#5b626e]">Critical</div>

                                 {/* High Priority Row */}
                                 <div className="flex items-center justify-end pr-2 text-xs font-medium text-[#5b626e]">High</div>
                                 <MatrixCell color="yellow" count={4} />
                                 <MatrixCell color="orange" count={8} />
                                 <MatrixCell color="red" count={3} />
                                 <MatrixCell color="red" count={1} />

                                 {/* Medium Priority Row */}
                                 <div className="flex items-center justify-end pr-2 text-xs font-medium text-[#5b626e]">Medium</div>
                                 <MatrixCell color="green" count={12} />
                                 <MatrixCell color="yellow" count={6} />
                                 <MatrixCell color="orange" count={2} />
                                 <MatrixCell color="red" count={0} />

                                 {/* Low Priority Row */}
                                 <div className="flex items-center justify-end pr-2 text-xs font-medium text-[#5b626e]">Low</div>
                                 <MatrixCell color="green" count={25} />
                                 <MatrixCell color="green" count={14} />
                                 <MatrixCell color="yellow" count={5} />
                                 <MatrixCell color="orange" count={1} />
                             </div>
                             <div className="text-center text-xs font-medium text-[#5b626e] mt-2">Severity</div>
                         </div>
                    </div>
                </Card>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
                 <SummaryCard label="Critical Risks" count="4" subLabel="Requiring immediate attention" color="red" />
                 <SummaryCard label="High Priority Systems" count="12" color="orange" />
                 <SummaryCard label="Mitigated Risks" count="156" color="green" />
                 <SummaryCard label="Total Scanned Assets" count="842" color="blue" />
            </div>
        </div>

        {/* Protection Token Management */}
        <Card title="Protection Token Management">
            <div className="flex flex-col md:flex-row gap-8 mt-4">
                {/* Donut Chart */}
                <div className="flex-1 flex flex-col items-center justify-center border-r border-[#edeef0] pr-8">
                    <div className="w-[200px] h-[200px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={tokenUsageData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    {tokenUsageData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-2xl font-medium text-[#264769]">78.3%</span>
                            <span className="block text-xs text-[#5b626e]">Used</span>
                        </div>
                    </div>
                    <div className="w-full mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-[#5b626e]">Used: <span className="font-medium text-[#264769]">783K</span></span>
                            <span className="text-[#5b626e]">Total: <span className="font-medium text-[#264769]">1M</span></span>
                        </div>
                        <div className="w-full bg-[#edeef0] rounded-full h-2">
                            <div className="bg-[#0280ef] h-2 rounded-full" style={{ width: '78.3%' }}></div>
                        </div>
                        <div className="flex items-center gap-2 text-[#ec0139] text-xs bg-[#fff5f5] p-2 rounded mt-2">
                            <TriangleAlert size={14} />
                            <span>High usage detected. Consider increasing token allocation.</span>
                        </div>
                    </div>
                </div>

                {/* Line Chart */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-[#264769]">Weekly Usage Trend</span>
                        <button className="text-[#0280ef] text-sm font-medium hover:underline">Manage Tokens</button>
                    </div>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={weeklyTrendData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#edeef0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#5b626e', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5b626e', fontSize: 12 }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="usage" stroke="#0280ef" strokeWidth={2} dot={{ r: 4, fill: '#0280ef' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-2 text-xs text-[#5b626e]">
                        Projected depletion: <span className="font-medium text-[#264769]">4 Days</span>
                    </div>
                </div>
            </div>
        </Card>

        {/* Agent & Tool Activity */}
        <div className="grid grid-cols-2 gap-5">
            <Card title="Top Used Agents">
                <div className="mt-4 flex flex-col gap-4">
                    {agentUsageData.map((agent) => (
                        <ActivityRow key={agent.name} name={agent.name} count={agent.count} risk={agent.risk} max={20000} />
                    ))}
                    <button className="self-start mt-2 bg-[#0280ef] text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-[#026ecf] transition-colors">
                        Manage Agents
                    </button>
                </div>
            </Card>
            <Card title="Top Used Tools & APIs">
                <div className="mt-4 flex flex-col gap-4">
                    {toolUsageData.map((tool) => (
                        <ActivityRow key={tool.name} name={tool.name} count={tool.count} risk={tool.risk} max={50000} />
                    ))}
                    <button className="self-start mt-2 bg-[#0280ef] text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-[#026ecf] transition-colors">
                        Configure Tools
                    </button>
                </div>
            </Card>
        </div>

      </div>
    </div>
  );
}

// Subcomponents

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-white rounded-lg border border-[#d4d6db] p-5 shadow-sm ${className}`}>
            <h3 className="text-[16px] font-medium text-[#264769]">{title}</h3>
            {children}
        </div>
    );
}

function StatCard({ icon, count, label }: { icon: React.ReactNode; count: string; label: string }) {
    return (
        <div className="bg-white rounded-lg border border-[#d4d6db] p-5 shadow-sm flex flex-col items-center justify-center gap-2">
            <div className="mb-1">{icon}</div>
            <span className="text-3xl font-medium text-[#264769]">{count}</span>
            <span className="text-sm text-[#5b626e]">{label}</span>
        </div>
    );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
    return (
        <div className="w-full border border-[#d4d6db] rounded overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="bg-[#f5f6f8] text-[#5b626e] font-medium">
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 border-b border-[#d4d6db]">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f5f6f8]'}>
                            {row.map((cell, j) => (
                                <td key={j} className="px-4 py-2.5 text-[#264769]">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LinkButton() {
    return (
        <button className="text-[#015ecb] hover:underline text-xs font-medium flex items-center gap-1">
            More Info <ExternalLink size={10} />
        </button>
    );
}

function MatrixCell({ color, count }: { color: 'red' | 'orange' | 'yellow' | 'green'; count: number }) {
    const bgColors = {
        red: 'bg-[#ec0139]',
        orange: 'bg-[#ff8c00]',
        yellow: 'bg-[#ffc107]',
        green: 'bg-[#156c42]',
    };
    
    return (
        <div className={`${bgColors[color]} h-10 w-full rounded flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition-opacity relative group`}>
            {count}
            {/* Tooltip mock */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                {count} items
            </div>
        </div>
    );
}

function SummaryCard({ label, count, subLabel, color }: { label: string; count: string; subLabel?: string; color: string }) {
    const borderColors: Record<string, string> = {
        red: 'border-l-[#ec0139]',
        orange: 'border-l-[#ff8c00]',
        green: 'border-l-[#156c42]',
        blue: 'border-l-[#0280ef]',
    };

    return (
        <div className={`bg-white border border-[#d4d6db] ${borderColors[color]} border-l-4 rounded p-3 shadow-sm flex flex-col`}>
            <span className="text-xs text-[#5b626e]">{label}</span>
            <span className="text-xl font-medium text-[#264769] mt-1">{count}</span>
            {subLabel && <span className="text-[10px] text-[#ec0139] mt-1 font-medium">{subLabel}</span>}
        </div>
    );
}

function ActivityRow({ name, count, risk, max }: { name: string; count: number; risk: string; max: number }) {
    const riskColors: Record<string, string> = {
        High: 'bg-[#ec0139] text-white',
        Medium: 'bg-[#ffc107] text-black',
        Low: 'bg-[#156c42] text-white',
    };

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm">
                <span className="text-[#264769] font-medium">{name}</span>
                <div className="flex items-center gap-2">
                    <span className="text-[#5b626e] text-xs">{count.toLocaleString()} calls</span>
                    <span className={`${riskColors[risk]} text-[10px] px-1.5 py-0.5 rounded`}>{risk}</span>
                </div>
            </div>
            <div className="w-full bg-[#edeef0] h-1.5 rounded-full overflow-hidden">
                <div 
                    className="bg-[#0280ef] h-full rounded-full" 
                    style={{ width: `${(count / max) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}
