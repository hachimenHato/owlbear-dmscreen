export const concentration = () => {
  const concentration = document.createElement('article');
  concentration.classList.add('card');
  concentration.innerHTML = `
    <h2>专注</h2>
    <div class="block">
      <p>若法术需通过专注维持，其说明会注明你可专注的时长。你可随时终止专注（无需动作）。以下因素会打断你的专注：<p>
      <ul>
        <li>你开始施展另一个需要专注的法术。</li>
        <li>你受到伤害。为维持专注，<span class="highlight">需进行一次体质豁免，难度等级为10或你所受伤害的一半，取两者中的较高值。</span></li>
        <li>你失能或死亡。</li>
        <li>你被巨大的干扰因素淹没，比如海浪冲击你。<span class="highlight">需进行一次难度等级10的体质豁免以维持专注。</span></li>
      </ul>
    </div>   
  `;
  return concentration;
};