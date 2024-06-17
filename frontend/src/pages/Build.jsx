import { useEffect, useState } from "react";

const dummy = {
  id: "1",
  category: "video",
  totalParticipants: 16,
  title: "Music video from kpop girls group world cup(Top 16)",
  description: `Choose your favorite music video from kpop girls group!`,
  entries: [
    {
      title: "Nmixx-O.O",
      url: "https://www.youtube.com/watch?v=3GWscde8rM8",
      winCount: 12,
    },
    {
      title: "ITZY-LOCO",
      url: "https://www.youtube.com/watch?v=MjCZfZfucEc",
      winCount: 10,
    },
    {
      title: "LE SSERAFIM-ANTIFRAGILE",
      url: "https://www.youtube.com/watch?v=pyf8cbqyfPs",
      winCount: 0,
    },
    {
      title: "(G)I-DLE-QueenCard",
      url: "https://www.youtube.com/watch?v=7HDeem-JaSY",
      winCount: 6,
    },
    {
      title: "NewJeans-Super Shy",
      url: "https://www.youtube.com/watch?v=ArmDp-zijuc",
      winCount: 5,
    },
    {
      title: "IVE-I AM",
      url: "https://www.youtube.com/watch?v=6ZUIwj3FgUY",
      winCount: 3,
    },
    {
      title: "aespa-Drama",
      url: "https://www.youtube.com/watch?v=D8VEhcPeSlc",
      winCount: 5,
    },
    {
      title: "STAYC-ASAP",
      url: "https://www.youtube.com/watch?v=NsY-9MCOIAQ",
      winCount: 7,
    },
    {
      title: "Dreamcatcher-BONVOYAGE",
      url: "https://www.youtube.com/watch?v=RPNaYj6etb8",
      winCount: 1,
    },
    {
      title: "TWICE-SET ME FREE",
      url: "https://www.youtube.com/watch?v=w4cTYnOPdNk",
      winCount: 2,
    },
    {
      title: "XG-GRL GVNG",
      url: "https://www.youtube.com/watch?v=Xiai4BRzZpU",
      winCount: 0,
    },
    {
      title: "PURPLE KISS-Sweet Juice",
      url: "https://www.youtube.com/watch?v=WFqGKa6p1V8",
      winCount: 1,
    },
    {
      title: "BADVILLAIN-BADVILLAIN",
      url: "https://www.youtube.com/watch?v=WpFuv7Q0VBo",
      winCount: 9,
    },
    {
      title: "ILLIT-Magnetic",
      url: "https://www.youtube.com/watch?v=Vk5-c_v4gMU",
      winCount: 2,
    },
    {
      title: "BABYMONSTER-SHEESH",
      url: "https://www.youtube.com/watch?v=2wA_b6YHjqQ",
      winCount: 8,
    },
    {
      title: "KISS OF LIFE-Midas Touch",
      url: "https://www.youtube.com/watch?v=oKVYm8mIUdo",
      winCount: 10,
    },
  ],
};
const Build = () => {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    // (async () => {
    //   try {
    //     const response = await fetch("http://localhost:8080/contest/", {
    //       method: "POST",
    //       credentials: "include",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(dummy),
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     setFetchData(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }, []);
  return (
    <div className="flex flex-col gap-4 p-8">
      <p>build page</p>
    </div>
  );
};

export default Build;
