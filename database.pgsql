--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: apps; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.apps (
    id integer NOT NULL,
    title character varying DEFAULT 'App'::character varying,
    file character varying DEFAULT '#'::character varying,
    category integer DEFAULT 1,
    description character varying DEFAULT 'Description'::character varying,
    publisher character varying DEFAULT 'Publisher'::character varying,
    version character varying DEFAULT '1.00(0)'::character varying,
    platform character varying NOT NULL,
    screenshots_count integer DEFAULT 0,
    img character varying DEFAULT 'Store.png'::character varying,
    visible boolean DEFAULT true
);


ALTER TABLE public.apps OWNER TO wunder;

--
-- Name: apps_categories; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.apps_categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.apps_categories OWNER TO wunder;

--
-- Name: apps_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.apps_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.apps_categories_id_seq OWNER TO wunder;

--
-- Name: apps_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.apps_categories_id_seq OWNED BY public.apps_categories.id;


--
-- Name: apps_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.apps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.apps_id_seq OWNER TO wunder;

--
-- Name: apps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.apps_id_seq OWNED BY public.apps.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.games (
    id integer NOT NULL,
    title character varying DEFAULT 'Game'::character varying,
    file character varying DEFAULT '#'::character varying,
    category integer DEFAULT 1,
    description character varying DEFAULT 'Description'::character varying,
    publisher character varying DEFAULT 'Publisher'::character varying,
    version character varying DEFAULT '1.00(0)'::character varying,
    platform character varying NOT NULL,
    screenshots_count integer DEFAULT 0,
    img character varying DEFAULT 'Store.png'::character varying,
    visible boolean DEFAULT true
);


ALTER TABLE public.games OWNER TO wunder;

--
-- Name: games_categories; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.games_categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.games_categories OWNER TO wunder;

--
-- Name: games_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.games_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.games_categories_id_seq OWNER TO wunder;

--
-- Name: games_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.games_categories_id_seq OWNED BY public.games_categories.id;


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.games_id_seq OWNER TO wunder;

--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: themes; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.themes (
    id integer NOT NULL,
    title character varying DEFAULT 'Theme'::character varying,
    file character varying DEFAULT '#'::character varying,
    category integer DEFAULT 1,
    description character varying DEFAULT 'Description'::character varying,
    publisher character varying DEFAULT 'Publisher'::character varying,
    version character varying DEFAULT '1.00(0)'::character varying,
    platform character varying NOT NULL,
    screenshots_count integer DEFAULT 0,
    img character varying DEFAULT 'Store.png'::character varying,
    visible boolean DEFAULT true
);


ALTER TABLE public.themes OWNER TO wunder;

--
-- Name: themes_categories; Type: TABLE; Schema: public; Owner: wunder
--

CREATE TABLE public.themes_categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.themes_categories OWNER TO wunder;

--
-- Name: themes_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.themes_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.themes_categories_id_seq OWNER TO wunder;

--
-- Name: themes_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.themes_categories_id_seq OWNED BY public.themes_categories.id;


--
-- Name: themes_id_seq; Type: SEQUENCE; Schema: public; Owner: wunder
--

CREATE SEQUENCE public.themes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.themes_id_seq OWNER TO wunder;

--
-- Name: themes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: wunder
--

ALTER SEQUENCE public.themes_id_seq OWNED BY public.themes.id;


--
-- Name: apps id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.apps ALTER COLUMN id SET DEFAULT nextval('public.apps_id_seq'::regclass);


--
-- Name: apps_categories id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.apps_categories ALTER COLUMN id SET DEFAULT nextval('public.apps_categories_id_seq'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: games_categories id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.games_categories ALTER COLUMN id SET DEFAULT nextval('public.games_categories_id_seq'::regclass);


--
-- Name: themes id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.themes ALTER COLUMN id SET DEFAULT nextval('public.themes_id_seq'::regclass);


--
-- Name: themes_categories id; Type: DEFAULT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.themes_categories ALTER COLUMN id SET DEFAULT nextval('public.themes_categories_id_seq'::regclass);


--
-- Data for Name: apps; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.apps (id, title, file, category, description, publisher, version, platform, screenshots_count, img, visible) FROM stdin;
\.


--
-- Data for Name: apps_categories; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.apps_categories (id, name) FROM stdin;
1	Other apps
\.


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.games (id, title, file, category, description, publisher, version, platform, screenshots_count, img, visible) FROM stdin;
\.


--
-- Data for Name: games_categories; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.games_categories (id, name) FROM stdin;
1	Other games
\.


--
-- Data for Name: themes; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.themes (id, title, file, category, description, publisher, version, platform, screenshots_count, img, visible) FROM stdin;
\.


--
-- Data for Name: themes_categories; Type: TABLE DATA; Schema: public; Owner: wunder
--

COPY public.themes_categories (id, name) FROM stdin;
1	All
\.


--
-- Name: apps_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.apps_categories_id_seq', 1, true);


--
-- Name: apps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.apps_id_seq', 1, false);


--
-- Name: games_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.games_categories_id_seq', 1, true);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.games_id_seq', 1, false);


--
-- Name: themes_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.themes_categories_id_seq', 1, true);


--
-- Name: themes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: wunder
--

SELECT pg_catalog.setval('public.themes_id_seq', 1, false);


--
-- Name: apps_categories apps_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.apps_categories
    ADD CONSTRAINT apps_categories_pkey PRIMARY KEY (id);


--
-- Name: apps apps_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_pkey PRIMARY KEY (id);


--
-- Name: games_categories games_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.games_categories
    ADD CONSTRAINT games_categories_pkey PRIMARY KEY (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: themes_categories themes_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.themes_categories
    ADD CONSTRAINT themes_categories_pkey PRIMARY KEY (id);


--
-- Name: themes themes_pkey; Type: CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_pkey PRIMARY KEY (id);


--
-- Name: apps apps_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.apps
    ADD CONSTRAINT apps_category_fkey FOREIGN KEY (category) REFERENCES public.apps_categories(id);


--
-- Name: games games_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_category_fkey FOREIGN KEY (category) REFERENCES public.games_categories(id);


--
-- Name: themes themes_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: wunder
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_category_fkey FOREIGN KEY (category) REFERENCES public.themes_categories(id);


--
-- PostgreSQL database dump complete
--

