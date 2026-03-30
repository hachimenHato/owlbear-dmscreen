export const actionList = () => {
  const actionList = document.createElement('article');
  actionList.classList.add('card', 'half-screen');
  actionList.innerHTML = `
    <h2>动作</h2>
    <table class="text">
      <thead>
        <tr>
          <th>动作</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>攻击</td>
          <td>进行一次近战或远程攻击。</td>
        </tr>
        <tr>
          <td>施法</td>
          <td>你施展一个戏法或环法术。查看法术的施法时间。你每回合只能施展一个环法术，但你可以用一个反应来施展另一个环法术。</td>
        </tr>
        <tr>
          <td>疾走</td>
          <td>获得等于你速度的额外移动力。这额外移动力发生在你的正常移动之后。</td>
        </tr>
        <tr>
          <td>撤离</td>
          <td>你的移动不会引发借机攻击。</td>
        </tr>
        <tr>
          <td>闪避</td>
          <td>直到你下个回合开始，任何针对你的攻击检定都具有劣势，前提是你能看到攻击者，并且你在进行敏捷豁免检定时具有优势。如果你陷入失能状态或速度降至0，则失去此增益。</td>
        </tr>
        <tr>
          <td>擒抱</td>
          <td>(1次近战攻击) 你进行一次运动（Athletics）检定，与目标的运动或体操（Acrobatics）检对抗。如果你获胜，你擒抱了目标。</td>
        </tr>
         <tr>
          <td>协助</td>
          <td>你协助另一个生物进行技能检定或攻击检定。目标在你下个回合开始前进行下一次能力检定或攻击检定时具有优势。</td>
        </tr>
        <tr>
          <td>隐藏</td>
          <td>你进行一次隐蔽（Stealth）检定以尝试隐藏。处于隐藏状态时，你的攻击具有优势，而针对你的攻击具有劣势。</td>
        </tr>
        <tr>
          <td>准备</td>
          <td>你等待特定情况发生后再行动，这使你能在自己下个回合开始前使用你的反应。你必须提前决定什么情况会触发你的反应，以及你将采取什么动作来响应触发。如果你准备了法术，它的施法时间必须是1个动作，并且你必须专注于此法术直到你释放它。</td>
        </tr>
        <tr>
          <td>搜索</td>
          <td>你进行一次察觉（Perception）检定或调查（Investigation）检定以寻找某物。</td>
        </tr>
        <tr>
          <td>推撞</td>
          <td>(1次近战攻击) 你进行一次运动（Athletics）检定，与目标的运动或体操（Acrobatics）检对抗。如果你获胜，你可以让目标倒地或将其推开5英尺。</td>
        </tr>
        <tr>
          <td>使用魔法物品</td>
          <td>你使用一个需要动作来使用的魔法物品。</td>
        </tr>
        <tr>
          <td>使用物品</td>
          <td>你使用一个需要动作来使用的物品。</td>
        </tr>
        <tr>
          <td>使用特殊能力</td>
          <td>你使用一个需要动作来使用的特殊能力。</td>
        </tr>
      </tbody>
    </table>
  `;
  return actionList;
};