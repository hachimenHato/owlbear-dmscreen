export const attribution = () => {
  const attribution = document.createElement('article');
  attribution.classList.add('card', 'three-column', 'fine-print');
  attribution.innerHTML = `<p>本作品包含根据威世智有限公司发布的《系统参考文档 5.1》（"SRD 5.1"）改编的材料，可在 <a href="https://dnd.wizards.com/resources/systems-reference-document" target="_blank">https://dnd.wizards.com/resources/systems-reference-document</a> 获取。SRD 5.1 根据知识共享署名 4.0 国际许可协议授权，协议文本可在 <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank">https://creativecommons.org/licenses/by/4.0/legalcode</a> 查看。</p>`;
  return attribution;
};
