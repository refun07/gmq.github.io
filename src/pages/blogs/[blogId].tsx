import { useRouter } from 'next/router';
import { blogData } from '../../components/contact/Blog';
import Image from 'next/image';

const BlogDetails = () => {
    const router = useRouter();
    const blogId = router.query.blogId;

    const blog = blogData.find((item) => item.id === Number(blogId));

    if (!blog) {
        return <>Blog not found...</>;
    }

    return (
        <div className="container mx-auto mt-8 mb-10">
            <div className="relative p-6 rounded-lg">
                <div className="float-right ml-4 mb-4 mt-5">
                    <Image src={blog?.image} alt={blog?.title} width={400} height={100} className="rounded-lg" />
                </div>

                <div className="mt-10">
                    <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>
                    <p className="text-gray-700 text-2xl mb-4">{blog?.description}</p>
                </div>
                {/* <div className="clear-both"></div> */}
                <div className="mt-4">
                    <h1 className="text-3xl font-bold mb-2">{blog?.about1?.title}</h1>
                    <p className="text-gray-700 font-bold mb-2">{blog?.about1?.description}</p>
                    <h1 className="text-3xl font-bold mb-2">{blog?.about2?.title}</h1>
                    <p className="text-gray-700 font-bold mb-2">{blog?.about2?.description}</p>
                    <h1 className="text-3xl font-bold mb-2">{blog?.about3?.title}</h1>
                    <p className="text-gray-700 font-bold mb-2">{blog?.about3?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
