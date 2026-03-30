export const cover = () => {
  const cover = document.createElement('article');
  cover.classList.add('card');
  cover.innerHTML = `
    <h2>掩护</h2>
    <table>
      <thead>
        <tr>
          <th class="text">掩护</th>
          <th>效果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>半掩护</td>
          <td class="text">护甲等级和敏捷豁免检定+2</td>
        </tr>
        <tr>
          <td>四分之三掩护</td>
          <td class="text">护甲等级和敏捷豁免检定+5</td>
        </tr>
        <tr>
          <td>完全掩护</td>
          <td class="text">无法被攻击或法术直接选为目标</td>
        </tr>
      </tbody>
    </table>
  `;
  return cover;
};