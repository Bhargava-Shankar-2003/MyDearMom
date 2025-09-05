import React from 'react'

const card = ({ title,target }: {title: string, target: string}) => {
  return (
    <div
      className="flex flex-col gap-1 rounded-2xl shadow-lg border-transparent border-3 p-5
                bg-slate-300 text-slate-800 transition-all ease-in-out duration-300 hover:shadow-[0_0_2rem_rgba(239,68,68,0.6)] 
                    w-[75%] min-h-max mr-5 cursor-pointer
                "
      onClick={() => {
        location.href = target;
      }}
    >
      <div className="font-bold italic text-gray-600 pb-2 text-xl">
        Saturday, 6th
      </div>
      <div className="font-extrabold text-3xl pb-1">{title}</div>

      <div className="font-light text-1xl text-c overflow-hidden whitespace-nowrap  text-ellipsis">
        It has been a year since god took you from us. Not to blame him for he
        doesn't exist. A lot of things changed, as they should. I still remember
        the last moments. I know life is not the same for everyone, but this I
        could not accept. I was thrown into these waves, stranded by everything,
        and drowning with just a pinch of hope to survive. I hope I survive and
        add meaning to all the struggles you endured, mentally and physically,
        to raise me.
      </div>
    </div>
  );
}

export default card