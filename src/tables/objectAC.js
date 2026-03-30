export const objectAC = () => {
  const objectAC = document.createElement('article');
  objectAC.classList.add('card');
  objectAC.innerHTML = `
    <h2>物品护甲等级</h2>
    <table>
      <thead>
        <tr>
          <th class="text">材质</th>
          <th>护甲等级</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>布料、纸张、绳索</td>
          <td>11</td>
        </tr>
        <tr>
          <td>水晶、玻璃、冰</td>
          <td>13</td>
        </tr>
        <tr>
          <td>木头、骨头</td>
          <td>15</td>
        </tr>
        <tr>
          <td>石头</td>
          <td>17</td>
        </tr>
        <tr>
          <td>铁、钢</td>
          <td>19</td>
        </tr>
        <tr>
          <td>秘银</td>
          <td>21</td>
        </tr>
        <tr>
          <td>精金</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  `;
  return objectAC;
};