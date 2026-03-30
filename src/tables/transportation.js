export const servicesAndTransportation = () => {
  const servicesAndTransportation = document.createElement('article');
  servicesAndTransportation.classList.add('card');
  servicesAndTransportation.innerHTML = `
    <h2>服务与交通</h2>
    <table>
      <thead>
        <tr>
          <th class="text">服务</th>
          <th>费用</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>出租马车（每英里）</td>
          <td>3 cp</td>
        </tr>
        <tr>
          <td>租用马车（每天）</td>
          <td>1 gp</td>
        </tr>
        <tr>
          <td>熟练雇工（每天）</td>
          <td>2 gp</td>
        </tr>
        <tr>
          <td>非熟练雇工（每天）</td>
          <td>2 sp</td>
        </tr>
        <tr>
          <td>信使（每英里）</td>
          <td>2 cp</td>
        </tr>
        <tr>
          <td>道路或城门通行费</td>
          <td>1 cp</td>
        </tr>
        <tr>
          <td>乘船（每英里）</td>
          <td>1 sp</td>
        </tr>
      </tbody>
    </table>
  `;
  return servicesAndTransportation;
}