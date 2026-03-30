export const settingDC = () => {
  const settingDC = document.createElement('article');
  settingDC.classList.add('card');
  settingDC.innerHTML = `
    <h2>设定难度等级</h2>
    <table>
      <thead>
        <tr>
          <th class="text">难度</th>
          <th>DC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>非常简单</td>
          <td>5</td>
        </tr>
        <tr>
          <td>简单</td>
          <td>10</td>
        </tr>
        <tr>
          <td>中等</td>
          <td>15</td>
        </tr>
        <tr>
          <td>困难</td>
          <td>20</td>
        </tr>
        <tr>
          <td>非常困难</td>
          <td>25</td>
        </tr>
        <tr>
          <td>几乎不可能</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>
  `;
  return settingDC;
};