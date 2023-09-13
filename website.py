import streamlit as st
import pandas as pd
import numpy as np

st.set_page_config(page_title="Eric's Portfolio Site", page_icon="resources/business.png")
st.title("Welcome to Eric (Tianze) Qian's site")
st.subheader("My Links")
st.write("[LinkedIn](https://www.linkedin.com/in/tianzeqian/)")
st.write("[Github](https://github.com/ericqian1/)")
st.write("[Recursion](https://www.ericqian.me)")
st.write("[Google Scholar](https://scholar.google.com/citations?user=vF-MEuYAAAAJ&hl=en)")
with open('resources/resume.pdf', 'rb') as f:
   st.download_button("Eric's Resume", f, file_name='Tianze_Qian_Resume.pdf')  # Defaults to 'application/octet-stream'
