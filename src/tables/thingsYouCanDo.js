export const thingsYouCanDo = () => {
  const thingsYouCanDo = document.createElement('article');
  thingsYouCanDo.classList.add('card');
  thingsYouCanDo.innerHTML = `
    <h2>你在回合中可以做的事</h2>
    <div class="block">
      <ul>
        <li>移动至多你的速度。</li>
        <li>进行一个动作。</li>
        <li>通过言语、手势或两者进行交流。</li>
        <li>在移动或进行动作时，与一个物体或环境特征互动。若要与第二个物体互动，需使用“使用物体”动作。</li>
      </ul>
    </div>
  `;
  return thingsYouCanDo;
}