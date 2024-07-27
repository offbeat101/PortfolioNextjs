import React from 'react';
import { motion } from 'framer-motion';
import TLI from "../../public/images/books_movies/TLI.png"
import PanLab from "../../public/images/books_movies/PanLab.png"
import AnimateHeading from '@/components/Animate/AnimatedHeading';
import beloved from "../../public/images/books_movies/beloved.png"
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Layout from "@/Container/Layout";
import CursorTail from "@/components/cursorTail";
import SimpleFeatureCard from '@/components/Cards/SimpleFeatureCard';
import Linguistics from '@/components/Linguistics'; 
import MoI from "../../public/images/books_movies/MoI.png"

const Activities = () => {
    return (
        <>
            <Head>
                <title>Activities &amp; Hobbies</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect/>
            <main className="flex flex-col justify-center items-center dark:text-light">
                <Layout className="pt-16">
                    <AnimateHeading text="Activities &amp; Hobbies" className="mb-16 lg:!text-7xl sm:!mb-6 sm:!text-6xl xs:!text-4xl"/>
                    
                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Books
                    </h1>

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">
                        <div className="col-span-12">
                            <SimpleFeatureCard
                                title="Beloved"
                                summary={
                                    <div>
                                        <p>In <em>Beloved</em>, Toni Morrison delves into the haunting legacy of slavery through Sethe, a former slave haunted by her deceased daughter's ghost. The novel poignantly explores trauma, identity, and motherhood, revealing how the past indelibly shapes the present. Morrison's lyrical prose underscores the enduring scars of enslavement and the quest for healing.</p>
                        
                                        <p>As the novel states, &apos;Freeing yourself was one thing, claiming ownership of that freed self was another.&apos; This highlights the struggle for true liberation beyond physical freedom. The story also emphasizes the enduring power of love and self-worth: &apos;Something that is loved is never lost&apos; and &apos;You your best thing, Sethe. You are.&apos; Morrison encapsulates the profound journey towards self-acceptance and the unbreakable bond of love, illustrating that the path to healing and redemption is deeply personal and continuous.</p>
                        
                                        <p>&apos;There is a loneliness that can be rocked. Arms crossed, knees drawn up, holding, holding on, this motion, unlike a ship&apos;s, smooths and contains the rocker. It&apos;s an inside kind--wrapped tight like skin. Then there is the loneliness that roams. No rocking can hold it down. It is alive. On its own. A dry and spreading thing that makes the sound of one&apos;s own feet going seem to come from a far-off place.&apos; — Toni Morrison</p>
                                    </div>
                                }
                                img={beloved}
                            />
                        </div>
                        <div className="col-span-12">
                            <SimpleFeatureCard
                                title="The Museum of Innocence"
                                summary={
                                    <div>
                                        <p>In <em>The Museum of Innocence</em>, Orhan Pamuk masterfully explores themes of love, obsession, and memory through the story of Kemal, who becomes deeply infatuated with Füsun. His passion leads him to collect objects related to her, creating a museum of memories. This narrative offers a profound reflection on the nature of love and the human desire to preserve moments of happiness.</p>
                                        <p>Key takeaways from the novel include the idea that true consolation comes not from holding onto the past but from immersing oneself in it to the point of losing all sense of time. As the novel states, &apos;In poetically well-built museums, formed from the heart&apos;s compulsions, we are consoled not by finding in them old objects that we love, but by losing all sense of Time.&apos;</p>
                                        <p>It highlights the complexity of love, &apos;The gap between compassion and surrender is love’s darkest, deepest region.&apos; Here, Pamuk underscores the intricate and often painful territory that lies between empathy and complete devotion, revealing the profound depths of human emotions.</p>
                                        <p>No one recognises the happiest moment of their lives as they are living it. It may well be that in a moment of joy, one might sincerely believe that they are living that golden instant &apos;now&apos;, even having lived such moments before, but whatever they say, in one part of their hearts they still believe that a happier moment to come. Because how could anyone, particularly anyone who is young, carry on with the belief that everything could only get worse: if a person is happy enough to think he has reached the happiest moment of his life, he will be hopeful enough to believe his future will be just as beautiful.</p>
                                    </div>
                                }
                                img={MoI}
                            />
                        </div>
                        <div className="col-span-12">
                            <SimpleFeatureCard
                                title="The Language Instinct"
                                summary={
                                    <div>
                                        <p>In <em>The Language Instinct</em>, Steven Pinker delves into the fascinating world of linguistics, arguing that language is a biological adaptation shaped by natural selection. Pinker presents compelling evidence that humans are born with an innate ability to learn language, making it a universal trait across cultures.</p>
                                        <p>One of the most amazing aspects of the book is Pinker's explanation of how children, regardless of their environment, can effortlessly acquire complex grammatical structures. He also explores the universality of linguistic features, demonstrating that all human languages share a deep underlying structure. As Pinker states, &apos;Language is a complex, specialized skill, which develops in the child spontaneously, without conscious effort or formal instruction.&apos;</p>
                                        <p>Pinker also highlights the evolutionary perspective on language development, suggesting that our capacity for language is as natural as our ability to walk. &apos;The complexity of language, from the way words are formed to the rules of syntax, reflects the intricate workings of the human mind,&apos; Pinker argues, showcasing how language reveals the nature of human thought itself.</p>
                                        <p>Ultimately, <em>The Language Instinct</em> is a celebration of the human capacity for language, offering deep insights into how we communicate and understand the world. Pinker's work underscores the incredible adaptability and creativity of the human mind.</p>
                                    </div>
                                }
                                img={TLI}
                            />
                        </div>
                    </div>
                    
                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Movies
                    </h1>

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">
                        <div className="col-span-12">
                            <SimpleFeatureCard
                                title="Pan&apos;s Labyrinth"
                                summary={
                                    <div>
                                        <p><em>Pan&apos;s Labyrinth</em>, directed by Guillermo del Toro, is a mesmerizing fantasy film set against the backdrop of post-Civil War Spain. The film follows young Ofelia, who discovers a mysterious labyrinth and encounters a faun who reveals her destiny as the reincarnation of a lost princess. Through its dark fairy tale, the movie explores themes of innocence, resistance, and the power of imagination amidst the harsh realities of war.</p>
                                        <p>One of the most remarkable elements of the film is its intricate visual storytelling. Del Toro's use of stunning practical effects and imaginative creature designs creates a hauntingly beautiful world that contrasts sharply with the grim reality of the Spanish Civil War. As Del Toro himself reflects, &apos;The fantasy world is the only place where you can confront the evil of the real world through metaphor and symbolism.&apos;</p>
                                        <p>The film also poignantly illustrates the strength of the human spirit. Ofelia's journey through the labyrinth serves as a powerful metaphor for the struggle against oppression and the search for personal identity. &apos;In a world full of darkness and cruelty, the light of hope and courage shines brightest,&apos; the film suggests, revealing the profound impact of fantasy on our understanding of real-world struggles.</p>
                                        <p>Ultimately, <em>Pan&apos;s Labyrinth</em> is a masterful blend of fantasy and reality, offering a deeply emotional and visually captivating experience that explores the resilience of the human spirit in the face of adversity.</p>
                                    </div>
                                }
                                img={PanLab}
                            />
                        </div>
                    </div>

                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Linguistics
                    </h1>
                    <Linguistics /> 

                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Games &amp; Sports
                    </h1>

                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Drawing &amp; Painting
                    </h1>

                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Travelling &amp; Trekking
                    </h1>
                </Layout>
            </main>
            <CursorTail/>
        </>
    );
};

export default Activities;
