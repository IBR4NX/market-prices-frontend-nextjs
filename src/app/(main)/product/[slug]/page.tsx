
import { redirect } from "next/navigation";
import ProductPage ,{generateMetadata, Props} from "../../[slug]/page";

export {generateMetadata}

export default async function Page({ params }: Props){
      const { slug } = await params;

    redirect(`/${slug}`);
}