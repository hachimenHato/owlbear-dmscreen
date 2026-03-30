export const trackingDC = () => {
  const trackingDC = document.createElement('article');
  trackingDC.classList.add('card');
  trackingDC.innerHTML = `
    <h2>追踪难度等级</h2>
    <table>
      <thead>
        <tr>
          <th class="text">地面状况</th>
          <th>DC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>柔软表面，如雪</td>
          <td>10</td>
        </tr>
        <tr>
          <td>泥土或草地</td>
          <td>15</td>
        </tr>
        <tr>
          <td>裸露的石头</td>
          <td>20</td>
        </tr>
        <tr>
          <td>石头</td>
          <td>17</td>
        </tr>
        <tr>
          <td>生物经过后的每一天</td>
          <td>+5</td>
        </tr>
        <tr>
          <td>生物留下了血迹等痕迹</td>
          <td>-5</td>
        </tr>
      </tbody>
    </table>
  `;
  return trackingDC;
};