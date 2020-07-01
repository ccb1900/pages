from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("https://quark.sm.cn/s?q=北京大学")
nodes = driver.find_element_by_css_selector('.c-tab-list:nth-child(1)')

nodes.click()

print(nodes)
# driver.close()
