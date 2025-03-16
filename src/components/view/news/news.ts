import './news.css';
import { Article } from '../../../types';
class News {
    draw(data: Article[]) {
        if (data.length) { }
        else { console.error("new News doesen't exist"); return; }
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (newsItemTemp) { }
        else { console.error("newsItemTemp doesen't exist"); return; }
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const temp = <T extends HTMLElement>(selector: string) => newsClone.querySelector<T>(selector) as HTMLElement;
            temp('.news__item')?.classList.toggle('alt', idx % 2 === 1);
            temp('.news__meta-photo').setAttribute('style', `backgroundImage : url(${item.urlToImage ?? 'img/news_placeholder.jpg'})`);
            temp('.news__meta - author').textContent = item.author ?? item.source.name;
            temp('.news__meta-date').textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            temp('.news__description-title').textContent = item.title;
            temp('.news__description-source').textContent = item.source.name;
            temp('.news__description-content').textContent = item.description ?? '';
            temp('.news__read-more a').setAttribute('href', item.url);
            temp('.news__item')
            temp('.news__item')
            temp('.news__item')
            temp('.news__item')
            fragment.append(newsClone);
        });

        const container = document.querySelector('.news');

        if (container) { container.innerHTML = ''; container.appendChild(fragment) }
        else { console.error("news doesen't exist"); return; }
    }
}

export default News;
