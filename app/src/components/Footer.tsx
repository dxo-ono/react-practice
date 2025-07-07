const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-[#f7fafd] to-[#eaf6fa] text-gray-700 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 左：ブログ名・説明・SNS */}
        <div>
          <div className="font-bold text-lg mb-2">DXO Blog</div>
          <div className="text-sm mb-4">DXOの社員や文化、最新のお知らせをお届けするブログ。</div>
          <div className="flex gap-3">
            <a href="#" aria-label="X" className="w-8 h-8 flex items-center justify-center rounded-full bg-black">
              <span className="text-white text-xl font-bold">X</span>
            </a>
            <a href="#" aria-label="Hatena" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00a4de]">
              <span className="text-white text-xl font-bold">B!</span>
            </a>
          </div>
        </div>
        {/* カテゴリ */}
        <div>
          <div className="font-semibold mb-2">Category</div>
          <ul className="space-y-1 text-sm">
            <li>ニュース</li>
            <li>インタビュー</li>
          </ul>
        </div>
        {/* アーカイブ */}
        <div>
          <div className="font-semibold mb-2">Archive</div>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">旧テックブログはこちらから</a>
            </li>
          </ul>
        </div>
        {/* 連絡先 */}
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm mb-1">〒164-0012<br />中野区本町2丁目46-1 中野坂上サンブライトツイン7階</div>
          <div className="text-sm mb-1">
            <a href="mailto:magazine@dxo.co.jp" className="hover:underline">magazine@dxo.co.jp</a>
          </div>
          <div className="text-sm">
            <a href="#" className="text-teal-500 hover:underline">→ コーポレートサイトへ</a>
          </div>
        </div>
      </div>
      {/* 区切り線 */}
      <div className="border-t border-gray-200 mt-10 mb-4"></div>
      {/* コピーライト */}
      <div className="text-center text-xs text-gray-400">
        © 2025 DXO Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
