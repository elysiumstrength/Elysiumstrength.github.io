import './LongevityTable.css';

export default function LongevityTable() {
  const tableData = [
    { nutrient: 'Protein', benefit: 'Muscle repair', source: 'Lean meats, tofu' },
    { nutrient: 'Omega-3', benefit: 'Heart health', source: 'Fish, chia seeds' },
    { nutrient: 'Fiber', benefit: 'Digestive health', source: 'Whole grains, veggies' },
    { nutrient: 'Vitamin D', benefit: 'Bone strength', source: 'Sunlight, eggs' },
    { nutrient: 'Antioxidants', benefit: 'Cell protection', source: 'Berries, dark chocolate' },
  ];

  return (
    <div className="longevity-table-container">
      <table className="longevity-table bordered">
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Benefit</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.nutrient}</td>
              <td>{row.benefit}</td>
              <td>{row.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
