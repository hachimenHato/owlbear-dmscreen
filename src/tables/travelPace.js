export const travelPace = () => {
  const travelPace = document.createElement('article');
  travelPace.classList.add('card', 'two-column');
  travelPace.innerHTML = `
    <h2>旅行速度</h2>
    <table>
      <thead>
        <tr>
          <th>速度</th>
          <th>每分</th>
          <th>每时</th>
          <th>每天</th>
          <th class="text">效果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>慢速</td>
          <td>200 尺</td>
          <td>2 英里</td>
          <td>18 英里</td>
          <td class="text">可使用潜行</td>
        </tr>
        <tr>
          <td>正常</td>
          <td>300 尺</td>
          <td>3 英里</td>
          <td>24 英里</td>
          <td class="text">无特殊效果</td>
        </tr>
        <tr>
          <td>快速</td>
          <td>400 尺</td>
          <td>4 英里</td>
          <td>30 英里</td>
          <td class="text">被动察觉-5</td>
        </tr>
      </tbody>
    </table>
  `;
  return travelPace;
}