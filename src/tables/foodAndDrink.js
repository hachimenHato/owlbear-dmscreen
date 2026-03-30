export const foodAndDrink = () => {
  const foodAndDrink = document.createElement('article');
  foodAndDrink.classList.add('card', 'two-column');
  foodAndDrink.innerHTML = `
    <h2>食物、饮料与住宿</h2>
    <div class="tables-wide">
      <table>
        <thead>
          <tr>
            <th class="text">物品</th>
            <th>费用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">麦酒</td>
          </tr>
          <tr class="sub">
            <td>加仑</td>
            <td>2 sp</td>
          </tr>
          <tr class="sub">
            <td>杯</td>
            <td>2 cp</td>
          </tr>
          <tr>
            <td>宴会（每人）</td>
            <td>10 gp</td>
          </tr>
          <tr>
            <td>面包（条）</td>
            <td>2 cp</td>
          </tr>
          <tr>
            <td>奶酪（块）</td>
            <td>1 sp</td>
          </tr>
          <tr>
            <td>肉（块）</td>
            <td>3 sp</td>
          </tr>
          <tr>
            <td colspan="2">葡萄酒</td>
          </tr>
          <tr class="sub">
            <td>普通（壶）</td>
            <td>2 sp</td>
          </tr>
          <tr class="sub">
            <td>精品（瓶）</td>
            <td>10 gp</td>
          </tr>
          <tr>
            <td colspan="2">烈酒</td>
          </tr>
          <tr class="sub">
            <td>一口（杯）</td>
            <td>1-5gp</td>
          </tr>
          <tr class="sub">
            <td>鸡尾酒</td>
            <td>5-10gp</td>
          </tr>
          <tr class="sub">
            <td>瓶</td>
            <td>10-30gp</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th class="text">物品</th>
            <th>费用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">住宿（每晚）</td>
          </tr>
          <tr class="sub">
            <td>肮脏</td>
            <td>7 cp</td>
          </tr>
          <tr class="sub">
            <td>简陋</td>
            <td>1 sp</td>
          </tr>
          <tr class="sub">
            <td>中等</td>
            <td>5 sp</td>
          </tr>
          <tr class="sub">
            <td>舒适</td>
            <td>8 sp</td>
          </tr>
          <tr class="sub">
            <td>豪华</td>
            <td>2 gp</td>
          </tr>
          <tr class="sub">
            <td>贵族</td>
            <td>4 gp</td>
          </tr>
          <tr>
            <td colspan="2">餐食（每日）</td>
          </tr>
          <tr class="sub">
            <td>肮脏</td>
            <td>3 cp</td>
          </tr>
          <tr class="sub">
            <td>简陋</td>
            <td>6 cp</td>
          </tr>
          <tr class="sub">
            <td>中等</td>
            <td>3 sp</td>
          </tr>
          <tr class="sub">
            <td>舒适</td>
            <td>5 sp</td>
          </tr>
          <tr class="sub">
            <td>豪华</td>
            <td>8 sp</td>
          </tr>
          <tr class="sub">
            <td>贵族</td>
            <td>2 gp</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  return foodAndDrink;
};