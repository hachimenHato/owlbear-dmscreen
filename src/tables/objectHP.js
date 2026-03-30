export const objectHP = () => {
  const objectHP = document.createElement('article');
  objectHP.classList.add('card');
  objectHP.innerHTML = `
    <h2>物品生命值</h2>
    <table>
      <thead>
        <tr>
          <th class="text">体型</th>
          <th>易碎</th>
          <th>坚韧</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>微型（瓶子、锁）</td>
          <td>2 (1d4)</td>
          <td>5 (2d4)</td>
        </tr>
        <tr>
          <td>小型（箱子、鲁特琴）</td>
          <td>3 (1d6)</td>
          <td>10 (3d6)</td>
        </tr>
        <tr>
          <td>中型（桶、吊灯）</td>
          <td>4 (1d8)</td>
          <td>18 (4d8)</td>
        </tr>
        <tr>
          <td>大型（推车、10×10尺窗户）</td>
          <td>5 (1d10)</td>
          <td>27 (5d10)</td>
        </tr>
        <tr>
          <td>巨型（划艇、雕像）</td>
          <td>6 (1d12)</td>
          <td>40 (6d12)</td>
        </tr>
        <tr>
          <td>超巨型（帆船、城墙）</td>
          <td>7 (2d6)</td>
          <td>50 (7d10)</td>
        </tr>
      </tbody>
    </table>
  `;
  return objectHP;
};