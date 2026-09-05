import glob
import json
import re
import os

def fix_unbraced_fractions(text):
    # Fix \operatorname{adj} inside \frac
    text = text.replace(r"\frac{\operatorname{adj}A}{|A|}", r"\frac{\operatorname{adj}(A)}{|A|}")
    text = text.replace(r"\dfrac{\operatorname{adj}A}{|A|}", r"\dfrac{\operatorname{adj}(A)}{|A|}")

    # Fix \frac{...}X where X is a single digit or letter
    text = re.sub(r"\\(d?frac)\s*\{([^}]+)\}\s*([0-9a-zA-Z])(?![0-9a-zA-Z\{])", r"\\\1{\2}{\3}", text)

    # Fix \frac XY where X and Y are single tokens
    text = re.sub(r"\\(d?frac)\s*([0-9a-zA-Z])\s*([0-9a-zA-Z])(?![0-9a-zA-Z\{])", r"\\\1{\2}{\3}", text)

    # Fix \frac X{...} where X is single token and denominator is already braced
    text = re.sub(r"\\(d?frac)\s*([0-9a-zA-Z])\s*\{", r"\\\1{\2}{", text)
    text = re.sub(r"\\(d?frac)\s*([0-9a-zA-Z])\s*(\\bar\{[^}]+\})", r"\\\1{\2}{\3}", text)
    text = re.sub(r"\\(d?frac)\s*([0-9a-zA-Z])\s*(\|[^|]+\|)", r"\\\1{\2}{\3}", text)
    text = re.sub(r"\\(d?frac)\s*([0-9a-zA-Z])\s*(\\sqrt\{[^}]+\})", r"\\\1{\2}{\3}", text)

    # Specific unbraced denominator patterns
    text = text.replace(r"\frac1{2i}", r"\frac{1}{2i}")
    text = text.replace(r"\frac1{\sqrt3}", r"\frac{1}{\sqrt{3}}")
    text = text.replace(r"\frac1{\sqrt2}", r"\frac{1}{\sqrt{2}}")

    return text

print("Fraction fixer module ready.")
