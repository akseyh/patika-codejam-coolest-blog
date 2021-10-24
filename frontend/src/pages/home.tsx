import { Layout } from "../components";

import { useEffect, useState } from "react";
import Post from "../components/post";
import UserCard from "../components/userCard";
import { PostType, UserType } from "../types";

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    setTimeout(() => {
      const userPayload = [
        {
          _id: 0,
          username: 'Adem Şahin',
          jobTitle: 'Go Developer',
          profilePhotoUrl: 'https://i.ibb.co/GvXGkfR/adem.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 1,
          username: 'Berat Bozkurt',
          jobTitle: 'Front End Developer',
          profilePhotoUrl: 'https://i.ibb.co/njdq3Kf/berat.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 2,
          username: 'Kadir Zabun',
          jobTitle: 'Back End Developer',
          profilePhotoUrl: 'https://i.ibb.co/G3ZQLnF/kadir.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        },
        {
          _id: 3,
          username: 'Şems Yılmaz',
          jobTitle: 'Front End Developer',
          profilePhotoUrl: 'https://i.ibb.co/9rrX0Lk/sems.png',
          cvUrl: '',
          bio: '',
          githubLink: ''
        }
      ]

      setUsers(userPayload)

      const postPayload = [
        {
          _id: 0,
          title: 'Başlık 1',
          author: 'Şems Yılmaz',
          text: 'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.'
        },
        {
          _id: 1,
          title: 'Başlık 2',
          author: 'Berat Bozkurt',
          text: 'Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli buraya metin gelecek, buraya metin gelecek yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında lorem ipsum anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.'
        },
        {
          _id: 2,
          title: 'Başlık 3',
          author: 'Kadir Zabun',
          text: 'Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.'
        },
        {
          _id: 3,
          title: 'Başlık 4',
          author: 'Adem Şahin',
          text: 'Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir. İnternetteki tüm Lorem Ipsum üreteçleri önceden belirlenmiş metin bloklarını yineler. Bu da, bu üreteci İnternet üzerindeki gerçek Lorem Ipsum üreteci yapar. Bu üreteç, 200den fazla Latince sözcük ve onlara ait cümle yapılarını içeren bir sözlük kullanır. Bu nedenle, üretilen Lorem Ipsum metinleri yinelemelerden, mizahtan ve karakteristik olmayan sözcüklerden uzaktır.'
        }
      ]

      setPosts(postPayload)
    }, 100)
  }, [])

  return (
    <Layout>
        <div className='w-full flex flex-col items-center mt-36'>
          <div className='w-11/12 flex justify-center gap-x-10 mt-8'>
            {
              users.map(user => (
                <UserCard key={user.username} user={user}/>
              ))
            }
          </div>
          <div className='w-11/12 mt-16 mb-8'>
            <span className='text-2xl font-semibold'>Son Yazılar</span>
            <div className='flex flex-col gap-y-6 mt-4'>
              {
                posts.map(post => (
                  <Post key={post.title} post={post}/>
                ))
              }
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Home;
