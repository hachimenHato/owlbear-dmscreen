(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const r of d)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(d){const r={};return d.integrity&&(r.integrity=d.integrity),d.referrerPolicy&&(r.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?r.credentials="include":d.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(d){if(d.ep)return;d.ep=!0;const r=n(d);fetch(d.href,r)}})();const l=()=>{const t=document.createElement("article");return t.classList.add("card","two-column"),t.innerHTML=`
    <h2>旅行速度</h2>
    <table>
      <thead>
        <tr>
          <th>速度</th>
          <th>每分</th>
          <th>每时</th>
          <th>每天</th>
          <th class="text">效果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>慢速</td>
          <td>200 尺</td>
          <td>2 英里</td>
          <td>18 英里</td>
          <td class="text">可使用潜行</td>
        </tr>
        <tr>
          <td>正常</td>
          <td>300 尺</td>
          <td>3 英里</td>
          <td>24 英里</td>
          <td class="text">无特殊效果</td>
        </tr>
        <tr>
          <td>快速</td>
          <td>400 尺</td>
          <td>4 英里</td>
          <td>30 英里</td>
          <td class="text">被动察觉-5</td>
        </tr>
      </tbody>
    </table>
  `,t},o=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},i=()=>{const t=document.createElement("article");return t.classList.add("card","two-column"),t.innerHTML=`
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
  `,t},h=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},b=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},u=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>追踪难度等级</h2>
    <table>
      <thead>
        <tr>
          <th class="text">地面状况</th>
          <th>DC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>柔软表面，如雪</td>
          <td>10</td>
        </tr>
        <tr>
          <td>泥土或草地</td>
          <td>15</td>
        </tr>
        <tr>
          <td>裸露的石头</td>
          <td>20</td>
        </tr>
        <tr>
          <td>石头</td>
          <td>17</td>
        </tr>
        <tr>
          <td>生物经过后的每一天</td>
          <td>+5</td>
        </tr>
        <tr>
          <td>生物留下了血迹等痕迹</td>
          <td>-5</td>
        </tr>
      </tbody>
    </table>
  `,t},p=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},m=()=>{const t=document.createElement("article");return t.classList.add("card","half-screen"),t.innerHTML=`
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
  `,t},y=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},L=()=>{const t=document.createElement("article");return t.classList.add("card","half-screen"),t.innerHTML=`
    <h2>状态</h2>
    <table class="text">
      <thead>
        <tr>
          <th>状态</th>
          <th>效果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>目盲</td>
          <td>自动失败任何需要视觉的检定。攻击骰处于劣势。攻击者具有优势。</td>
        </tr>
        <tr>
          <td>魅惑</td>
          <td>无法攻击魅惑者，或用有害能力/效果针对他们。魅惑者在与被魅惑生物进行社交互动时具有优势。</td>
        </tr>
        <tr>
          <td>耳聋</td>
          <td>自动失败任何需要听觉的能力检定。</td>
        </tr>
        <tr>
          <td>力竭</td>
          <td>
            <ol>
              <li>能力检定处于劣势。</li>
              <li>速度减半。</li>
              <li>攻击骰和豁免检定处于劣势。</li>
              <li>最大生命值减半。</li>
              <li>速度降至0。</li>
              <li>死亡。</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>坠落</td>
          <td>坠落结束时，生物每坠落10尺受到1d6钝击伤害（最高20d6）。以此方式受到伤害的生物会倒地。</td>
        </tr>
        <tr>
          <td>惊惧</td>
          <td>惊惧的生物在恐惧源处于视线内时，能力检定和攻击骰处于劣势。该生物无法自愿向恐惧源靠近。</td>
        </tr>
        <tr>
          <td>被擒抱</td>
          <td>被擒抱生物的速度变为0，且无法从任何速度加值中获益。若擒抱者失能（见该状态），此状态结束。若有效果将被擒抱生物移出擒抱者或擒抱效果的触及范围（例如生物被*雷霆波*法术击飞），此状态也会结束。</td>
        </tr>
        <tr>
          <td>隐藏</td>
          <td>当你攻击一个你看不见的目标时，你的攻击骰处于劣势。如果目标不在你指定的位置，你自动失手。当一个生物看不见你时，你对它的攻击骰处于优势。如果你在攻击时处于隐藏状态，无论攻击命中还是失手，你都会暴露自己的位置。</td>
        </tr>
        <tr>
          <td>失能</td>
          <td>失能的生物无法进行动作或反应。</td>
        </tr>
        <tr>
          <td>隐形</td>
          <td>隐形的生物在没有魔法或特殊感官的帮助下无法被看见。为了隐藏的目的，该生物处于重度遮蔽。该生物的位置可以通过它发出的任何声音或留下的任何踪迹被察觉。对该生物的攻击骰处于劣势，该生物的攻击骰处于优势。</td>
        </tr>
        <tr>
          <td>麻痹</td>
          <td>麻痹的生物失能（见该状态）且无法移动或说话。该生物的力量和敏捷豁免检定自动失败。对该生物的攻击骰处于优势。如果攻击者在该生物5尺范围内，任何命中该生物的攻击都是暴击。</td>
        </tr>
        <tr>
          <td>石化</td>
          <td>石化的生物连同它穿戴或携带的任何非魔法物品一起转化为固体无生命物质（通常是石头）。它的重量增加十倍，并且停止衰老。该生物失能（见该状态），无法移动或说话，且对周围环境毫无察觉。对该生物的攻击骰处于优势。该生物的力量和敏捷豁免检定自动失败。该生物对所有伤害有抗性。该生物免疫毒素和疾病，尽管已经在其体内的毒素或疾病会被暂停，而非被中和。</td>
        </tr>
        <tr>
          <td>中毒</td>
          <td>中毒的生物在攻击骰和能力检定上处于劣势。</td>
        </tr>
        <tr>
          <td>倒地</td>
          <td>倒地的生物唯一的移动选择是爬行，除非它使用一半移动力站起，从而结束该状态。该生物在攻击骰上处于劣势。如果攻击者在该生物5尺范围内，对该生物的攻击骰处于优势。否则，攻击骰处于劣势。</td>
        </tr>
         <tr>
          <td>被束缚</td>
          <td>被束缚的生物速度变为0，且无法从任何速度加值中获益。对该生物的攻击骰处于优势，该生物的攻击骰处于劣势。该生物在敏捷豁免检定上处于劣势。</td>
        </tr>
         <tr>
          <td>震慑</td>
          <td>震慑的生物失能（见该状态），无法移动，且只能支支吾吾地说话。该生物的力量和敏捷豁免检定自动失败。对该生物的攻击骰处于优势。</td>
        </tr>
         <tr>
          <td>无意识</td>
          <td>无意识的生物失能（见该状态），无法移动或说话，且对周围环境毫无察觉。该生物掉落手中持有的任何物品并倒地。该生物的力量和敏捷豁免检定自动失败。对该生物的攻击骰处于优势。如果攻击者在该生物5尺范围内，任何命中该生物的攻击都是暴击。</td>
        </tr>
      </tbody>
    </table>
  `,t},g=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>能见度（户外）</h2>
    <table>
      <thead>
        <tr>
          <th class="text">描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>晴朗天气，无障碍物</td>
          <td>2 英里</td>
        </tr>
        <tr>
          <td>下雨</td>
          <td>1 英里</td>
        </tr>
        <tr>
          <td>雾</td>
          <td>100-300 尺</td>
        </tr>
        <tr>
          <td>从高处</td>
          <td>×20</td>
        </tr>
      </tbody>
    </table>
  `,t},f=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>可听距离</h2>
    <table>
      <thead>
        <tr>
          <th class="text">描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>试图保持安静</td>
          <td>2d6 x 5 尺</td>
        </tr>
        <tr>
          <td>正常噪音水平</td>
          <td>2d6 x 10 尺</td>
        </tr>
        <tr>
          <td>高声噪音水平</td>
          <td>2d6 x 50 尺</td>
        </tr>
      </tbody>
    </table>
  `,t},x=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>遭遇距离</h2>
    <table>
      <thead>
        <tr>
          <th>地形描述</th>
          <th>距离</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>北极、沙漠、农田或草原</td>
          <td>6d6 x 10 尺</td>
        </tr>
        <tr>
          <td>森林、沼泽或林地</td>
          <td>2d8 x 10 尺</td>
        </tr>
        <tr>
          <td>丘陵或荒地</td>
          <td>2d10 x 10 尺</td>
        </tr>
        <tr>
          <td>丛林</td>
          <td>2d6 x 10 尺</td>
        </tr>
        <tr>
          <td>山地</td>
          <td>4d10 x 10 尺</td>
        </tr>
        <tr>
          <td>地下或城市</td>
          <td>2d4 x 10 尺</td>
        </tr>
      </tbody>
    </table>
  `,t},v=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>伤害严重程度</h2>
    <table>
      <thead>
        <tr>
          <th>等级</th>
          <th>挫折</th>
          <th>危险</th>
          <th>致命</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-4</td>
          <td>1d10</td>
          <td>2d10</td>
          <td>4d10</td> 
        </tr>
        <tr>
          <td>5-10</td>
          <td>2d10</td>
          <td>4d10</td>
          <td>10d10</td>
        </tr>
        <tr>
          <td>11-16</td>
          <td>4d10</td>
          <td>10d10</td>
          <td>18d10</td>
        </tr>
        <tr>
          <td>17-20</td>
          <td>10d10</td>
          <td>18d10</td>
          <td>24d10</td>
        </tr>
      </tbody>
    </table>
  `,t},E=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>光源</h2>
    <table>
      <thead>
        <tr>
          <th>光源</th>
          <th>明亮光照</th>
          <th>昏暗光照</th>
          <th>持续时间</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>蜡烛</td>
          <td>5 尺</td>
          <td>+ 5 尺</td>
          <td>1 小时</td> 
        </tr>
        <tr>
          <td>提灯</td>
          <td>15 尺</td>
          <td>+30 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>牛眼灯</td>
          <td>60 尺，锥形</td>
          <td>+ 60 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>兜帽灯</td>
          <td>30 尺</td>
          <td>+ 30 尺</td>
          <td>6 小时</td>
        </tr>
        <tr>
          <td>放下兜帽</td>
          <td> - </td>
          <td>+ 5 尺</td>
          <td>-</td>
        </tr>
        <tr>
          <td>火把</td>
          <td>20 尺</td>
          <td>+ 20 尺</td>
          <td>1 小时</td>
        </tr>
      </tbody>
    </table>
  `,t},H=()=>{const t=document.createElement("article");return t.classList.add("card","three-column"),t.innerHTML=`
    <h2>技能与相关属性</h2>
    <div class="tables-wide">
      <table>
        <thead>
          <tr>
            <th>技能</th>
            <th>属性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>杂技</td>
            <td>敏捷</td>
          </tr>
          <tr>
            <td>驯兽</td>
            <td>敏捷</td>
          </tr>
          <tr>
            <td>奥秘</td>
            <td>智力</td>
          </tr>
          <tr>
            <td>运动</td>
            <td>力量</td>
          </tr>
          <tr>
            <td>欺瞒</td>
            <td>魅力</td>
          </tr>
          <tr>
            <td>历史</td>
            <td>智力</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>技能</th>
            <th>属性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>洞察</td>
            <td>感知</td>
          </tr>
          <tr>
            <td>威吓</td>
            <td>魅力</td>
          </tr>
          <tr>
            <td>调查</td>
            <td>智力</td>
          </tr>
          <tr>
            <td>医疗</td>
            <td>感知</td>
          </tr>
          <tr>
            <td>自然</td>
            <td>智力</td>
          </tr>
          <tr>
            <td>察觉</td>
            <td>感知</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>技能</th>
            <th>属性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>表演</td>
            <td>魅力</td>
          </tr>
          <tr>
            <td>说服</td>
            <td>魅力</td>
          </tr>
          <tr>
            <td>宗教</td>
            <td>智力</td>
          </tr>
          <tr>
            <td>巧手</td>
            <td>敏捷</td>
          </tr>
          <tr>
            <td>潜行</td>
            <td>敏捷</td>
          </tr>
          <tr>
            <td>求生</td>
            <td>感知</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,t},T=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>跳跃</h2>
    <div class="block">
      <h4>跳远</h4>
      <p>移动10尺以上，然后跳跃的距离等于你的力量属性值（尺）。若进行原地跳远，只能跳跃该距离的一半。</p>
    </div>
    <div class="block">
      <h4>跳高</h4>
      <p>移动10尺以上，然后跳跃的高度等于3 + 你的力量调整值（尺）。若进行原地跳高，只能跳跃该距离的一半。</p>
    </div>  
   
  `,t},M=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
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
  `,t},D=()=>{const t=document.createElement("article");return t.classList.add("card"),t.innerHTML=`
    <h2>你在回合中可以做的事</h2>
    <div class="block">
      <ul>
        <li>移动至多你的速度。</li>
        <li>进行一个动作。</li>
        <li>通过言语、手势或两者进行交流。</li>
        <li>在移动或进行动作时，与一个物体或环境特征互动。若要与第二个物体互动，需使用“使用物体”动作。</li>
      </ul>
    </div>
  `,t},C=()=>{const t=document.createElement("article");return t.classList.add("card","three-column","fine-print"),t.innerHTML='<p>本作品包含根据威世智有限公司发布的《系统参考文档 5.1》（"SRD 5.1"）改编的材料，可在 <a href="https://dnd.wizards.com/resources/systems-reference-document" target="_blank">https://dnd.wizards.com/resources/systems-reference-document</a> 获取。SRD 5.1 根据知识共享署名 4.0 国际许可协议授权，协议文本可在 <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank">https://creativecommons.org/licenses/by/4.0/legalcode</a> 查看。</p>',t},a=document.createElement("div");a.id="container";const A=[p,y,v,b,h,T,u,l,g,f,x,E,M,D,m,L,i,o,H,C];A.forEach(t=>{a.appendChild(t())});document.querySelector("#app").appendChild(a);
