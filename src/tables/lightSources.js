export const lightSources = () => {
  const lightSources = document.createElement('article');
  lightSources.classList.add('card');
  lightSources.innerHTML = `
    <h2>光源</h2>
    <table>
      <thead>
        <tr>
          <th>光源</th>
          <th>明亮光照</th>
          <th>昏暗光照</th>
          <th>持续时间</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>蜡烛</td>
          <td>5 尺</td>
          <td>+ 5 尺</td>
          <td>1 小时</td> 
        </tr>
        <tr>
          <td>提灯</td>
          <td>15 尺</td>
          <td>+30 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>牛眼灯</td>
          <td>60 尺，锥形</td>
          <td>+ 60 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>兜帽灯</td>
          <td>30 尺</td>
          <td>+ 30 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>放下兜帽</td>
          <td> - </td>
          <td>+ 5 尺</td>
          <td>-</td>
        </tr>
        <tr>
          <td>火把</td>
          <td>20 尺</td>
          <td>+ 20 尺</td>
          <td>1 小时</td>
        </tr>
      </tbody>
    </table>
  `;
  return lightSources;
};