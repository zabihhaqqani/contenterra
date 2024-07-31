import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import DOMPurify from 'dompurify';
import he from 'he';

const Card = ({ data: { title, selftext_html, url, score } }) => {
    const sanitizedHTML = DOMPurify.sanitize(selftext_html);
    const decodedHTML = he.decode(sanitizedHTML);

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full mb-4 hover:cursor-pointer border border-black py-1 px-5 rounded-lg bg-white shadow-md transition-all hover:bg-zinc-100"
        >
            <AccordionItem value={title} className="border-none">
                <AccordionTrigger className="md:text-xl font-medium text-left">
                    {title}
                </AccordionTrigger>
                <AccordionContent>
                    {selftext_html ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: decodedHTML,
                            }}
                            className="prose prose-sm max-w-none"
                        />
                    ) : (
                        <p>No HTML</p>
                    )}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 block"
                    >
                        Read more
                    </a>
                    <p className="text-sm mt-2">Score: {score}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default Card;
