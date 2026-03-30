export const encounterDistance = () => {
  const encounterDistance = document.createElement('article');
  encounterDistance.classList.add('card');
  encounterDistance.innerHTML = `
    <h2>遭遇距离</h2>
    <table>
      <thead>
        <tr>
          <th>地形描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>北极、沙漠、农田或草原</td>
          <td>6d6 x 10 尺</td>
        </tr>
        <tr>
          <td>森林、沼泽或林地</td>
          <td>2d8 x 10 尺</td>
        </tr>
        <tr>
          <td>丘陵或荒地</td>
          <td>2d10 x 10 尺</td>
        </tr>
        <tr>
          <td>丛林</td>
          <td>2d6 x 10 尺</td>
        </tr>
        <tr>
          <td>山地</td>
          <td>4d10 x 10 尺</td>
        </tr>
        <tr>
          <td>地下或城市</td>
          <td>2d4 x 10 尺</td>
        </tr>
      </tbody>
    </table>
  `;
  return encounterDistance;
};