import Watched from './watched'
import Premiere from './premiere'
import Account from '../../utils/account'
import Lang from '../../utils/lang'
import Bot from './bot'
import Extend from './extend'
import Player from './player'
import Offer from './offer'

function init(){
    Lang.add({
        ad_notice_tv_text_1: {
            ru: 'Будьте в курсе новых серий - получайте уведомления о переводах на свой смартфон!',
            uk: 'Будьте в курсі нових серій - отримуйте сповіщення про переклади на свій смартфон!',
            be: 'Будзьце ў курсе новых серый - атрымлівайце апавяшчэння аб перакладах на свой смартфон!',
            bg: 'Бъдете в час с новите серии - получавайте уведомление за преводите на своят смартфон!'
        },
        ad_notice_tv_text_2: {
            ru: 'Никогда не пропускайте новую серию - получайте уведомления о переводах на свой смартфон!',
            uk: 'Ніколи не пропускайте нову серію - отримуйте сповіщення про переклади на свій смартфон!',
            be: 'Ніколі не прапускайце новую серыю - атрымлівайце апавяшчэння аб перакладах на свой смартфон!',
            bg: 'Бъдете в час с новите серии - получавайте уведомление за преводите на своят смартфон!',
        },
        ad_notice_tv_text_3: {
            ru: 'Оставайтесь в центре событий - получайте уведомления о переводах новых серий на свой смартфон!',
            uk: 'Залишайтесь у центрі подій - отримуйте повідомлення про переведення нових серій на свій смартфон!',
            be: 'Заставайцеся ў цэнтры падзей - атрымлівайце апавяшчэння аб перакладах новых серый на свой смартфон!',
            bg: 'Бъдете в центъра на събитията - получавайте уведомление за преводите на новите серии на своят смартфон!',
        },
        ad_notice_tv_text_4: {
            ru: 'Будьте первыми, кто узнает о переводах новых серий - получайте уведомления на свой смартфон!',
            uk: 'Будьте першими, хто дізнається про переклади нових серій – отримуйте повідомлення на свій смартфон!',
            be: 'Будзьце першымі, хто даведаецца аб перакладах новых серый - атрымлівайце апавяшчэння на свой смартфон!',
            bg: 'Бъдете първи, за да узнаете за превода на нови серии - получавайте уведомление на своят смартфон!',
        },
        ad_notice_tv_text_5: {
            ru: 'Не пропустите ни одной новой серии - получайте уведомления о переводах на свой смартфон и смотрите сериалы в любимом переводе!',
            uk: 'Не пропустіть жодної нової серії – отримуйте повідомлення про переклади на свій смартфон та дивіться серіали у улюбленому перекладі!',
            be: 'Не прапусціце ніводнай новай серыі - атрымлівайце апавяшчэнні аб перакладах на свой смартфон і глядзіце серыялы ў любімым перакладзе!',
            bg: 'Не пропускайте нито една серия - получавайте уведомление за преводите на своят смартфон и гледайте сериалите с желаният превод!',
        },

        ad_notice_tv: {
            ru: 'Получение уведомлений о переводе сериала на свой смартфон - это удобный способ всегда оставаться в курсе и не пропустить ни одной серии. Вы больше не будете терять время на поиски новых серий и следить за релизами вручную. Просто подпишитесь на перевод и получайте уведомления о выходе новых серий на свой смартфон. Это сэкономит вам время и сделает просмотр сериалов еще более комфортным.',
            uk: 'Отримання повідомлень про переведення серіалу на свій смартфон – це зручний спосіб завжди залишатися в курсі та не пропустити жодної серії. Ви більше не будете гаяти час на пошуки нових серій і стежити за релізами вручну. Просто підпишіться на переклад та отримуйте повідомлення про вихід нових серій на свій смартфон. Це заощадить вам час і зробить перегляд серіалів ще комфортнішим.',
            be: 'Атрыманне апавяшчэнняў аб пераводзе серыяла на свой смартфон - гэта зручны спосаб заўсёды заставацца ў курсе і не прапусціць ніводнай серыі. Вы больш не будзеце марнаваць час на пошукі новых серый і сачыць за рэлізамі ўручную. Проста падпішыцеся на пераклад і атрымлівайце апавяшчэнні аб выхадзе новых серый на свой смартфон. Гэта зэканоміць вам час і зробіць прагляд серыялаў яшчэ камфортнейшым.',
            bg: 'Получавайте уведомление за преведени сериали на своят смартфон - това е удобен начин винаги да си в час и да не пропуснеш нито една серия. Повече няма да губите време в търсене на нови излъчени серии. Това ще спести времето ви и ще направи прегледа на сериали още по-комфортно',
        },

        
        ad_bot_tv_title: {
            ru: 'Уведомления на вашем смартфоне',
            uk: 'Сповіщення на вашому смартфоні',
            be: 'Апавешчанні на вашым смартфоне',
            bg: 'Известия на вашия смартфон'
        },
            
        ad_bot_tv_text: {
            ru: 'Будьте в курсе самых ожидаемых моментов! Теперь вы можете получать мгновенные уведомления о выходе новых серий и фильмов прямо на свой смартфон.',
            uk: 'Будьте в курсі найочікуваніших моментів! Тепер ви можете отримувати миттєві сповіщення про виход нових серіалів і фільмів прямо на свій смартфон.',
            be: 'Будзьце ў курсе самых чаканых момантаў! Цяпер вы можаце атрымліваць хуткія апавешчанні аб выходзе новых сэрыяў і фільмаў проста на свой смартфон.',
            bg: 'Бъдете в течение на най-очакваните моменти! Сега можете да получавате мигновени известия за излизането на нови серии и филми директно на вашия смартфон.'
        }
    })


    Lampa.Listener.follow('line',(event)=>{
        if(event.type == 'create' && event.data.ad && !Account.hasPremium() && Lang.selected(['ru','uk','be','bg'])){
            let item

            if(event.data.ad == 'bot'){
                item = new Bot({
                    card: event.data.results[0],
                    type: event.data.type,
                    title: Lang.translate('ad_bot_tv_title'),
                    text: Lang.translate('ad_bot_tv_text'),
                    poster: event.data.results[0].poster_path
                })
            }
            else{
                item = new Watched({
                    card: event.data.results[0],
                    type: event.data.type
                })
            }
            
            item.render(true).on('hover:focus',(e)=>{
                event.scroll.update(e.target)
            })

            event.items.push(item)

            event.scroll.append(item.render(true))
        }
    })

    Premiere.init()
    Extend.init()
    Player.init()
    Offer.init()
}

export default {
    init
}
