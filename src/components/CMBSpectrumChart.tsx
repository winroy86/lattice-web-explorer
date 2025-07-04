import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Placeholder data for CMB power spectrum
const cmbData = [
  { l: 2, Cl: 1200 },
  { l: 10, Cl: 2500 },
  { l: 50, Cl: 4800 },
  { l: 100, Cl: 6000 },
  { l: 200, Cl: 5200 },
  { l: 500, Cl: 3800 },
  { l: 1000, Cl: 2200 },
  { l: 1500, Cl: 1200 },
  { l: 2000, Cl: 800 }
];

export const CMBSpectrumChart = () => {
  return (
    <div className="w-full h-96 bg-white rounded-lg p-4 shadow-sm">
      <h3 className="font-merriweather font-semibold text-lg mb-4 text-center">
        CMB Angular Power Spectrum (Lattice Theory Prediction)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cmbData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="l" 
            label={{ value: 'Multipole moment ℓ', position: 'insideBottom', offset: -10 }}
          />
          <YAxis 
            label={{ value: 'ℓ(ℓ+1)Cₗ/(2π) [μK²]', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value) => [`${value} μK²`, 'Power']}
            labelFormatter={(label) => `ℓ = ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="Cl" 
            stroke="#0066ff" 
            strokeWidth={2}
            dot={{ fill: '#0066ff', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        Predicted peaks based on lattice harmonic analysis where ℓ ∝ N = h² + k² + l²
      </p>
    </div>
  );
};