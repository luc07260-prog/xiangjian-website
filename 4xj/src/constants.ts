import cunluoImg from './assets/images/cunluo.jpg';
import yucunImg from './assets/images/yucun.jpg';
import tianyuanImg from './assets/images/tianyuan.jpg';
import laojieImg from './assets/images/laojie.jpg';
import mijingImg from './assets/images/mijing.jpg';
import songyangImg from './assets/images/songyang.jpg';
import sipingImg from './assets/images/siping.jpg';
import lvxingImg from './assets/images/lvxing.jpg';
import feiyiImg from './assets/images/feiyi.jpg';
import mingsuImg from './assets/images/mingsu.jpg';
import meishiImg from './assets/images/meishi.jpg';
import chuangyeImg from './assets/images/chuangye.jpg';
import huizhougucunImg from './assets/images/huizhougucun.jpg';
import tiyanImg from './assets/images/tiyan.jpg';
import xiaoyucunImg from './assets/images/xiaoyucun.jpg';
import nongjiacaiImg from './assets/images/nongjiacai.jpg';
export const NAV_LINKS = [
  { label: '首页', href: '#' },
  { label: '探索乡村', href: '#explore' },
  { label: '非遗文化', href: '#heritage' },
  { label: '青年计划', href: '#youth' },
  { label: '灵感社区', href: '#community' },
  { label: 'AI推荐', href: '#ai' },
];

export const STATS = [
  { value: '2,356+', label: '乡村目的地' },
  { value: '128+', label: '非遗文化体验' },
  { value: '6,892+', label: '乡见社区用户' },
  { value: '98%', label: '用户满意度' },
];

export const VILLAGES = [
  {
    location: '浙江·松阳',
    title: '山间村落',
    desc: '隐藏在山间的古村落',
    likes: '1.2k',
    image: songyangImg,
  },
  {
    location: '福建·四坪',
    title: '云雾缭绕',
    desc: '深山古镇的静谧时光',
    likes: '968',
    image: sipingImg,
  },
  {
    location: '广西·芭沙',
    title: '枪手部落',
    desc: '最后一个枪手部落',
    likes: '756',
    image: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80&w=800',
  },
  {
    location: '云南·大足',
    title: '临湖而居',
    desc: '泸沽湖畔的摩梭人家',
    likes: '2.1k',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800',
  },
];

export const EXPLORE_CATEGORIES = [
  { label: '山间村落', image: cunluoImg },
  { label: '临湖渔村', image: yucunImg },
  { label: '田园风光', image: tianyuanImg },
  { label: '古道老街', image: laojieImg },
  { label: '边履秘境', image: mijingImg },
];

export const EXPERIENCE_CATEGORIES = [
  { title: '乡村旅行', desc: '勇闯山海·在地体验', icon: 'Map', image: lvxingImg },
  { title: '非遗文化', desc: '传统技艺·匠心传承', icon: 'Palette', image: feiyiImg },
  { title: '乡村民宿', desc: '特色住宿·慢享时光', icon: 'Home', image: mingsuImg },
  { title: '乡村美食', desc: '地道风味·时令之味', icon: 'Utensils', image: meishiImg },
  { title: '青年创业', desc: '返乡筑梦·青年力量', icon: 'Rocket', image: chuangyeImg },
];

export const COMMUNITY_POSTS = [
  {
    title: '在徽州古村里遇见最美的春天',
    author: '小桥流水',
    likes: '235',
    image: huizhougucunImg,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
  },
  {
    title: '亲手做了一次竹编,发现传统工艺好治愈',
    author: '野性小白子',
    likes: '189',
    image: tiyanImg,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    title: '在海边的小渔村,生活变得简单美好',
    author: '蓝色海洋线',
    likes: '312',
    image: xiaoyucunImg,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
  },
  {
    title: '学做了一道地道的农家菜，太赞了!',
    author: '优游间风',
    likes: '154',
    image: nongjiacaiImg,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
  },
];
