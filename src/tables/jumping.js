export const jumping = () => {
  const jumping = document.createElement('article');
  jumping.classList.add('card');
  jumping.innerHTML = `
    <h2>跳跃</h2>
    <div class="block">
      <h4>跳远</h4>
      <p>移动10尺以上，然后跳跃的距离等于你的力量属性值（尺）。若进行原地跳远，只能跳跃该距离的一半。</p>
    </div>
    <div class="block">
      <h4>跳高</h4>
      <p>移动10尺以上，然后跳跃的高度等于3 + 你的力量调整值（尺）。若进行原地跳高，只能跳跃该距离的一半。</p>
    </div>  
   
  `;
  return jumping;
};