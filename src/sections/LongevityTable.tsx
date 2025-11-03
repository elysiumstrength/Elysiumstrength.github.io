import './LongevityTable.css';

export default function LongevityTable() {
  const tableData = [
    { pillar: 'Protein', focus: 'Muscle repair', benefit: 'Lean meats, tofu' },
    { pillar: 'Omega-3', focus: 'Heart health', benefit: 'Fish, chia seeds' },
    { pillar: 'Fiber', focus: 'Digestive health', benefit: 'Whole grains, veggies' },
    { pillar: 'Vitamin D', focus: 'Bone strength', benefit: 'Sunlight, eggs' },
    { pillar: 'Antioxidants', focus: 'Cell protection', benefit: 'Berries, dark chocolate' },
  ];

  return (
    <div className="longevity-table-container">
      <table className="longevity-table bordered">
        <thead>
          <tr>
            <th>Pillar</th>
            <th>Focus</th>
            <th>Benefit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.pillar}</td>
              <td>{row.focus}</td>
              <td>{row.benefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
