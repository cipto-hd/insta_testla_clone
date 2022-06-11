import { DotsHorizontalIcon, PlusIcon } from "@heroicons/react/solid";
import {
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import {
  kaos,
  PPChristine,
  PPDavid,
  PPElena,
  PPJohn,
  PPMichael,
  ProfilePict,
  xanmod,
} from "../../../assets/instagram";

const stories_pp = [
  { pp: ProfilePict, name: "Cipto" },
  { pp: PPChristine, name: "Christine Hadi" },
  { pp: PPDavid, name: "David" },
  { pp: PPElena, name: "Elena" },
  { pp: PPDavid, name: "David" },
  { pp: PPJohn, name: "John" },
  { pp: PPMichael, name: "Michael" },
];

const getStories = () => {
  return [...stories_pp, ...stories_pp, ...stories_pp].map((s, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center justify-center h-24 m-1 cursor-pointer group w-14"
    >
      <img
        className=" p-[2px] border-2 border-red-500 rounded-full w-14 h-14 group-hover:scale-110 transition-transform ease-in-out duration-200"
        src={s.pp}
        alt="Profile Picture"
      />
      {index === 0 ? (
        <PlusIcon className="absolute font-bold text-gray-200 transition-transform duration-200 ease-in-out w-7 h-7 top-6 left-4 group-hover:scale-150 group-hover:text-gray-500" />
      ) : null}
      <span className="text-xs text-center text-gray-800 truncate w-14">
        {s.name}
      </span>
    </div>
  ));
};

export const Main = () => {
  return (
    <main className="container grid grid-cols-1 md:grid-cols-3">
      {/* Feed */}
      <section className="md:col-span-2">
        {/* Stories */}
        <div className="flex gap-2 overflow-x-scroll border rounded-md scrollbar-none">
          {getStories()}
        </div>

        {/* Posts */}
        <div className="bg-white border rounded-md my-7">
          {/* Post Header */}
          <div className="flex items-center p-2">
            <img
              className="w-12 h-12 p-1 border rounded-full cursor-pointer"
              src={ProfilePict}
              alt="Profile Picture"
            />
            <span className="flex-1 mx-1 text-sm font-medium text-gray-800 cursor-pointer">
              Cipto
            </span>
            <DotsHorizontalIcon className="w-6 h-6 cursor-pointer" />
          </div>
          {/* Post Image */}
          <img
            src={xanmod}
            alt="xanmod linux kernel"
            className="object-cover w-full"
          />

          {/* Post Buttons */}
          <div className="flex justify-between p-3">
            <div>
              <div className="flex gap-4">
                <HeartIcon className="btn" />
                <ChatIcon className="btn" />
                <PaperAirplaneIcon className="h-5 rotate-45 stroke-0 fill-blue-600 btn" />
              </div>
              <p className="text-xs font-semibold text-gray-800">2 shares</p>
            </div>
            <div>
              <BookmarkIcon className="btn" />
            </div>
          </div>

          {/* Caption */}
          <p className="px-4 text-gray-800 truncate">
            <span className="mr-3 font-bold">cipto.hd</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            consequuntur neque minus possimus quae iusto delectus maxime
            eligendi id quod. Molestiae, asperiores quis fugit laborum, deserunt
            numquam maiores reprehenderit, id ratione distinctio totam!
          </p>

          {/* Post Comments */}
          <div className="px-6 py-2 overflow-y-scroll max-h-24 scrollbar-none">
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={PPChristine}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">christine</p>
              <p className="flex-1 text-gray-800 truncate">Nice</p>
              <p>2 hours ago</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={PPDavid}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">david</p>
              <p className="flex-1 text-gray-800 truncate">Awesome</p>
              <p>3 hours ago</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={PPJohn}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">john</p>
              <p className="flex-1 text-gray-800 truncate">Wonderful</p>
              <p>4 hours ago</p>
            </div>
          </div>

          {/* Post Comment Input Box */}
          <form action="#" className="flex items-center gap-1 m-2">
            <EmojiHappyIcon className="w-5 h-5" />
            <input
              type="text"
              className="flex-1 text-sm font-light text-gray-500 outline-none"
              placeholder="Enter your comment"
            />
            <button className="font-semibold text-blue-400">Send</button>
          </form>
        </div>

        <div className="bg-white border rounded-md my-7">
          {/* Post Header */}
          <div className="flex items-center p-2">
            <img
              className="w-12 h-12 p-1 border rounded-full cursor-pointer"
              src={PPElena}
              alt="Profile Picture"
            />
            <span className="flex-1 mx-1 text-sm font-medium text-gray-800 cursor-pointer">
              Elena
            </span>
            <DotsHorizontalIcon className="w-6 h-6 cursor-pointer" />
          </div>
          {/* Post Image */}
          <img
            src={kaos}
            alt="koos oblong abu-abu"
            className="object-cover w-full"
          />

          {/* Post Buttons */}
          <div className="flex justify-between p-3">
            <div>
              <div className="flex gap-4">
                <HeartIcon className="stroke-0 fill-red-600 btn" />
                <ChatIcon className="stroke-0 fill-green-600 btn" />
                <PaperAirplaneIcon className="h-5 rotate-45 stroke-0 fill-blue-600 btn" />
              </div>
              <p className="text-xs font-semibold text-gray-800">
                2 likes . 5+ comments . 10+ shares
              </p>
            </div>
            <div>
              <BookmarkIcon className="btn fill-gray-900" />
            </div>
          </div>

          {/* Caption */}
          <p className="px-4 text-gray-800 truncate">
            <span className="mr-3 font-bold">elena</span>
            Wowwww, machoo!
          </p>

          {/* Post Comments */}
          <div className="px-6 py-2 overflow-y-scroll max-h-24 scrollbar-none">
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={ProfilePict}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">cipto.hd</p>
              <p className="flex-1 text-gray-800 truncate">Nice</p>
              <p>2 hours ago</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={PPDavid}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">david</p>
              <p className="flex-1 text-gray-800 truncate">Awesome</p>
              <p>3 hours ago</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <img
                className="object-cover rounded-full h-7"
                src={PPJohn}
                alt="profile picture"
              />
              <p className="font-bold text-gray-800">john</p>
              <p className="flex-1 text-gray-800 truncate">Wonderful</p>
              <p>4 hours ago</p>
            </div>
          </div>

          {/* Post Comment Input Box */}
          <form action="#" className="flex items-center gap-1 m-2">
            <EmojiHappyIcon className="w-5 h-5" />
            <input
              type="text"
              className="flex-1 text-sm font-light text-gray-500 outline-none"
              placeholder="Enter your comment"
            />
            <button className="font-semibold text-blue-400">Send</button>
          </form>
        </div>
      </section>

      {/* Right */}
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed p-3 pl-5 w-80">
          {/* Mini Profile */}
          <div className="flex items-center gap-2">
            <img
              className="w-16 h-16 rounded-full border-[2px]"
              src={ProfilePict}
              alt="Profile Picture"
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">Cipto</h2>
              <p className="text-sm text-gray-500">All days are awesome</p>
            </div>

            <button className="text-sm font-semibold text-blue-400">
              Sign out
            </button>
          </div>

          {/* Suggestions */}
          <div className="mt-4">
            <div className="flex items-center">
              <h3 className="flex-1 font-bold text-gray-400">
                Suggestions for you
              </h3>
              <button className="font-semibold text-gray-600">See All</button>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 p-[2px] border rounded-full"
                src={PPChristine}
                alt="Laura Profile Picture"
              />
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800">Laura</h2>
                <h3 className="text-xs text-gray-400">HR Manager</h3>
              </div>

              <button className="text-sm font-semibold text-blue-400">
                Follow
              </button>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 p-[2px] border rounded-full"
                src={PPElena}
                alt="Elena Profile Picture"
              />
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800">Elena</h2>
                <h3 className="text-xs text-gray-400">Sr. Accountant</h3>
              </div>

              <button className="text-sm font-semibold text-blue-400">
                Follow
              </button>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 p-[2px] border rounded-full"
                src={PPMichael}
                alt="John Profile Picture"
              />
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800">John</h2>
                <h3 className="text-xs text-gray-400">CEO Meg Inc.</h3>
              </div>

              <button className="text-sm font-semibold text-blue-400">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
