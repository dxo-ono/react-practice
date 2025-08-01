import rawArticles from '../assets/data/articleData.json';

// 画像インポート
import newyearImg from '../assets/images/newyear.png';
import memberImg from '../assets/images/member@2x.png';
import charityImg from '../assets/images/charity@2x.png';
import DXGeneralImg from '../assets/images/DXO_general@2x.png';
import HealthImg from '../assets/images/Health@2x.png';
import StepImg from '../assets/images/step@2x.png';
import WifiImg from '../assets/images/wi-fi@2x.png';
import RabbitImg from '../assets/images/rabbit@2x.png';
import RoomImg from '../assets/images/room@2x.png';
import TalkImg from '../assets/images/talk@2x.png';
import GeneralMeetingImg from '../assets/images/general_meeting@2x.png';

// サムネと画像のマッピング
const thumbnailMap: Record<string, string> = {
  'newyear.png': newyearImg,
  'member@2x.png': memberImg,
  'charity@2x.png': charityImg,
  'DXO_general@2x.png': DXGeneralImg,
  'Health@2x.png': HealthImg,
  'step@2x.png': StepImg,
  'wi-fi@2x.png': WifiImg,
  'rabbit@2x.png': RabbitImg,
  'room@2x.png': RoomImg,
  'talk@2x.png': TalkImg,
  'general_meeting@2x.png': GeneralMeetingImg,
};

// 記事データ
export const articleData = rawArticles.map(article => ({
  ...article,
  thumbnail: thumbnailMap[article.thumbnail] || '',
}));

export default articleData;
