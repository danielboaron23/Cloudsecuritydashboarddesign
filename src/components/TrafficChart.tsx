import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface TrafficChartProps {
  data: any[];
}

export function TrafficChart({ data }: TrafficChartProps) {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid vertical={false} stroke="#EDEEF0" />
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#5b626e', fontSize: 12 }}
            ticks={['0:00', '6:00', '12:00', '18:00']}
            tickFormatter={(value) => {
               // Mocking the dates from the design (Jul 7 - Jul 28)
               // Since we just passed hours, let's map them mockingly or just use index
               if (value === '0:00') return 'Jul 7';
               if (value === '6:00') return 'Jul 14';
               if (value === '12:00') return 'Jul 21';
               return 'Jul 28';
            }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#5b626e', fontSize: 12 }}
            tickFormatter={(value) => `${value} Gbps`}
            domain={[0, 0.4]}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #EDEEF0', borderRadius: '4px', fontSize: '12px' }}
          />
          <Legend 
            iconType="circle" 
            iconSize={6}
            wrapperStyle={{ fontSize: '12px', color: '#5b626e', paddingTop: '10px' }}
          />
          <Line 
            type="monotone" 
            dataKey="legitimate" 
            name="Legitimate traffic" 
            stroke="#92c3d0" 
            strokeWidth={2} 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="percentile" 
            name="95 Percentile" 
            stroke="#ec0139" 
            strokeWidth={2} 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="purchased" 
            name="Purchased" 
            stroke="#018ffe" 
            strokeWidth={2} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
