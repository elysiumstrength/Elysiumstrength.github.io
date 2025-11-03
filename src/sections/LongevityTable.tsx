import './LongevityTable.css';

export default function LongevityTable() {
  const tableData = [
    { pillar: 'Lift Heavy (Smart)', focus: 'McGill-based technique', benefit: 'Bone & muscle strength' },
    { pillar: 'Move Fast', focus: 'Agility/jump work', benefit: 'Coordination & power' },
    { pillar: 'Balance & React', focus: 'Reactive drills', benefit: 'Fall prevention' },
    { pillar: 'Feet First', focus: 'Barefoot strength', benefit: 'Stability' },
    { pillar: 'Recover Intentionally', focus: 'Mobility + breathwork', benefit: 'Nervous-system reset' },
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
