import React from "react";

const BreakpointTest: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Tailwind ブレイクポイント テストページ
      </h1>
      
      {/* カスタムブレイクポイントのテスト */}
      <div className="space-y-8">
        
        {/* xs ブレイクポイント テスト (320px+) */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">xs ブレイクポイント (320px+)</h2>
          <div className="hidden xs:block bg-blue-100 p-4 rounded">
            <p>✅ xs ブレイクポイントが動作しています (320px以上で表示)</p>
          </div>
          <div className="xs:hidden bg-red-100 p-4 rounded">
            <p>❌ 320px未満で表示中</p>
          </div>
        </div>

        {/* sp ブレイクポイント テスト (390px+) */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">sp ブレイクポイント (390px+)</h2>
          <div className="hidden sp:block bg-green-100 p-4 rounded">
            <p>✅ sp ブレイクポイントが動作しています (390px以上で表示)</p>
          </div>
          <div className="sp:hidden bg-orange-100 p-4 rounded">
            <p>📱 390px未満で表示中</p>
          </div>
        </div>

        {/* max-sp ブレイクポイント テスト (389px以下) */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">max-sp ブレイクポイント (389px以下)</h2>
          <div className="max-sp:block hidden bg-purple-100 p-4 rounded">
            <p>✅ max-sp ブレイクポイントが動作しています (389px以下で表示)</p>
          </div>
          <div className="max-sp:hidden bg-gray-100 p-4 rounded">
            <p>🖥️ 390px以上で表示中</p>
          </div>
        </div>

        {/* md ブレイクポイント テスト (768px+) */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">md ブレイクポイント (768px+)</h2>
          <div className="hidden md:block bg-indigo-100 p-4 rounded">
            <p>✅ md ブレイクポイントが動作しています (768px以上で表示)</p>
          </div>
          <div className="md:hidden bg-yellow-100 p-4 rounded">
            <p>📱 768px未満で表示中</p>
          </div>
        </div>

        {/* max800 ブレイクポイント テスト (800px以下) */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">max800 ブレイクポイント (800px以下)</h2>
          <div className="max800:block hidden bg-pink-100 p-4 rounded">
            <p>✅ max800 ブレイクポイントが動作しています (800px以下で表示)</p>
          </div>
          <div className="max800:hidden bg-teal-100 p-4 rounded">
            <p>🖥️ 800px以上で表示中</p>
          </div>
        </div>

          <div className="p-4 bg-white rounded-lg shadow">
              <div
                className="text-lg text-black"
                style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
              >
                フォントテスト：これは Zen Kaku Gothic New ですか？ style=
              </div>
              <div className="font-zen text-lg text-black">フォントテスト：これは Zen Kaku Gothic New ですか？ font-zen</div>
          </div>


        {/* 複合テスト */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">複合テスト</h2>
          <div className="grid grid-cols-1 sp:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-red-200 p-4 rounded text-center">
              <p className="text-sm">常に表示</p>
            </div>
            <div className="bg-blue-200 p-4 rounded text-center sp:block hidden">
              <p className="text-sm">sp+ (390px+)</p>
            </div>
            <div className="bg-green-200 p-4 rounded text-center md:block hidden">
              <p className="text-sm">md+ (768px+)</p>
            </div>
            <div className="bg-purple-200 p-4 rounded text-center lg:block hidden">
              <p className="text-sm">lg+ (1024px+)</p>
            </div>
          </div>
        </div>

        {/* 現在の画面サイズ表示 */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">現在の画面サイズ</h2>
          <div className="text-lg font-mono">
            <span className="xs:hidden">xs未満 (&lt;320px)</span>
            <span className="hidden xs:inline sp:hidden">xs (320px+)</span>
            <span className="hidden sp:inline sm:hidden">sp (390px+)</span>
            <span className="hidden sm:inline md:hidden">sm (640px+)</span>
            <span className="hidden md:inline lg:hidden">md (768px+)</span>
            <span className="hidden lg:inline xl:hidden">lg (1024px+)</span>
            <span className="hidden xl:inline 2xl:hidden">xl (1280px+)</span>
            <span className="hidden 2xl:inline">2xl (1536px+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakpointTest; 