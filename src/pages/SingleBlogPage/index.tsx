import SingleBlog from '@/components/contact/SingleBlog';
import { DynamicHead } from '@/components/share';
import { useRouter } from 'next/router';
import React from 'react';

function SingleBlogPage () {
    const router = useRouter()
    return (
        <div>
            <DynamicHead title="Single Blog - GMQ Global"  canonicalPath={router?.pathname} />
            <SingleBlog></SingleBlog>
            
        </div>
    );
};

export default SingleBlogPage;