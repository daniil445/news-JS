import './sources.css';
import { Source } from '../../../types';
class Sources {
    draw(data: Source[]):void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (sourceItemTemp) { }
        else { console.error("sourceItemTemp doesen't exist"); return; }
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const itemName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            const itemData = sourceClone.querySelector<HTMLElement>('.source__item');
            if (itemName && itemData) {
                itemName.textContent = item.name;
                itemData.setAttribute('data-source-id', item.id);
            }
            fragment.append(sourceClone);
        });

        const src = document.querySelector('.sources');
        if (src) src.append(fragment);
        else { console.error("sources doesen't exist"); return; }
    }
}

export default Sources;
