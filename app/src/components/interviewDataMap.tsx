import rawinterview from '../assets/data/interviewData.json';

// 画像インポート
import aboutImg from '../assets/images/about@2x.png';
import runImg from '../assets/images/run@2x.png';
import meetingImg from '../assets/images/meeting@2x.png';


// サムネと画像のマッピング
const thumbnailMap: Record<string, string> = {
  'about@2x.png': aboutImg,
  'run@2x.png': runImg,
  'meeting@2x.png': meetingImg,
};

// 記事データ
export const interviewData = rawinterview.map(interview => ({
  ...interview,
  thumbnail: thumbnailMap[interview.thumbnail] || '',
}));

export default interviewData;