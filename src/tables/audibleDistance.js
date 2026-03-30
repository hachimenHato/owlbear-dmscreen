export const audibleDistance = () => {
  const audibleDistance = document.createElement('article');
  audibleDistance.classList.add('card');
  audibleDistance.innerHTML = `
    <h2>可听距离</h2>
    <table>
      <thead>
        <tr>
          <th class="text">描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>试图保持安静</td>
          <td>2d6 x 5 尺</td>
        </tr>
        <tr>
          <td>正常噪音水平</td>
          <td>2d6 x 10 尺</td>
        </tr>
        <tr>
          <td>高声噪音水平</td>
          <td>2d6 x 50 尺</td>
        </tr>
      </tbody>
    </table>
  `;
  return audibleDistance;
};
