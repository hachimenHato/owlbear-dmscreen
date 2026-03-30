export const outdoorVisibility = () => {
  const outdoorVisibility = document.createElement('article');
  outdoorVisibility.classList.add('card');
  outdoorVisibility.innerHTML = `
    <h2>能见度（户外）</h2>
    <table>
      <thead>
        <tr>
          <th class="text">描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>晴朗天气，无障碍物</td>
          <td>2 英里</td>
        </tr>
        <tr>
          <td>下雨</td>
          <td>1 英里</td>
        </tr>
        <tr>
          <td>雾</td>
          <td>100-300 尺</td>
        </tr>
        <tr>
          <td>从高处</td>
          <td>×20</td>
        </tr>
      </tbody>
    </table>
  `;
  return outdoorVisibility;
};