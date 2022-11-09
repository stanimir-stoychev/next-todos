import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faDna } from '@fortawesome/free-solid-svg-icons';

import styles from './page.module.css';

export default function Home() {
    return (
        <main
            className={clsx(
                'pt-24',
                'md:pt-48',
                'flex',
                'flex-wrap',
                'flex-col',
                'md:flex-row',
                'items-center',
                'container',
                'px-6',
                'mx-auto',
            )}
        >
            <section className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1
                    className={clsx(
                        'text-purple-800',
                        'leading-tight',
                        'text-center',
                        'md:text-left',
                        'text-3xl',
                        'md:text-5xl',
                        'font-bold',
                        'my-4',
                        styles['slide-in-bottom-h1'],
                    )}
                >
                    Next todos
                </h1>

                <h3
                    className={clsx(
                        'leading-normal',
                        'mb-8',
                        'text-center',
                        'md:text-left',
                        'text-base',
                        'md:text-2xl',
                        styles['slide-in-bottom-subtitle'],
                    )}
                >
                    by Stan and Drazen
                </h3>
            </section>

            <aside className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                <Image
                    className={clsx('w-5/6', 'mx-auto', 'lg:mr-0', styles['slide-in-bottom'])}
                    src="/devices.svg"
                    alt="Image of different devices"
                    width={100}
                    height={100}
                />
            </aside>
        </main>
    );
}
